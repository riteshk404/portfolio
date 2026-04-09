import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, Printer, Plus, X, Upload, Camera, ChevronRight, ChevronLeft, Mail, Phone, MapPin, Linkedin, Globe, Check, Wand2 } from 'lucide-react';
import html2pdf from 'html2pdf.js';

const STEPS = ['Personal', 'Skills & Summary', 'Experience', 'Education', 'Training', 'Preview'];

export default function CVMaker() {
  const [photo, setPhoto] = useState('');
  const [step, setStep] = useState(0);
  const [info, setInfo] = useState({
    fullName: '', title: '', email: '', phone: '', location: '',
    linkedin: '', website: '', summary: '', skills: '',
    dateOfBirth: '', fatherName: '', nationality: '',
    gender: '', religion: '', maritalStatus: ''
  });
  const [experiences, setExperiences] = useState([
    { id: 1, jobTitle: '', company: '', date: '', description: '' }
  ]);
  const [educations, setEducations] = useState([
    { id: 1, degree: '', school: '', date: '', description: '' }
  ]);
  const [trainings, setTrainings] = useState([
    { id: 1, title: '', description: '' }
  ]);

  const onPhoto = (e) => {
    const f = e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = (ev) => setPhoto(ev.target.result);
    r.readAsDataURL(f);
  };

  const set = (e) => setInfo({ ...info, [e.target.name]: e.target.value });

  const addExp = () => setExperiences([...experiences, { id: Date.now(), jobTitle: '', company: '', date: '', description: '' }]);
  const rmExp = (id) => setExperiences(experiences.filter(x => x.id !== id));
  const upExp = (id, k, v) => setExperiences(experiences.map(x => x.id === id ? { ...x, [k]: v } : x));

  const addEdu = () => setEducations([...educations, { id: Date.now(), degree: '', school: '', date: '', description: '' }]);
  const rmEdu = (id) => setEducations(educations.filter(x => x.id !== id));
  const upEdu = (id, k, v) => setEducations(educations.map(x => x.id === id ? { ...x, [k]: v } : x));

  const addTr = () => setTrainings([...trainings, { id: Date.now(), title: '', description: '' }]);
  const rmTr = (id) => setTrainings(trainings.filter(x => x.id !== id));
  const upTr = (id, k, v) => setTrainings(trainings.map(x => x.id === id ? { ...x, [k]: v } : x));

  const fillMockData = () => {
    setInfo({
      fullName: 'Ritesh Karki',
      title: 'Full Stack Developer',
      email: 'ritesh@example.com',
      phone: '+977 9812345678',
      location: 'Kathmandu, Nepal',
      linkedin: 'linkedin.com/in/riteshkarki',
      website: 'riteshkarki.com',
      summary: 'Passionate Full Stack Developer with 3+ years of experience building scalable web applications. Proficient in React, Node.js, and modern UI/UX design. Dedicated to writing clean, maintainable code and solving complex problems.',
      skills: 'JavaScript, React, Node.js, Tailwind CSS, PostgreSQL, Python, Git, Docker, AWS',
      dateOfBirth: '21 Aug 2004',
      fatherName: 'Ram Karki',
      nationality: 'Nepalese',
      gender: 'Male',
      religion: 'Hindu',
      maritalStatus: 'Unmarried'
    });
    setExperiences([
      { id: 1, jobTitle: 'Senior Frontend Developer', company: 'Tech Corp', date: '2023 - Present', description: 'Led the frontend team in rewriting the core application using Next.js and Tailwind. Improved performance by 40% and reduced bundle size significantly.' },
      { id: 2, jobTitle: 'Web Developer Intern', company: 'Startup Inc', date: '2022 - 2023', description: 'Collaborated with designers to implement responsive UI components. Integrated REST APIs and fixed critical bugs in the legacy codebase.' }
    ]);
    setEducations([
      { id: 1, degree: 'B.Sc. Computer Science and Information Technology', school: 'Tribhuvan University', date: '2022 - 2026', description: 'Focusing on Software Engineering and Artificial Intelligence. Vice President of the IT Club.' }
    ]);
    setTrainings([
      { id: 1, title: 'Advanced React Patterns', description: 'Completed infinite scroll, compound components, and state reducer patterns.' },
      { id: 2, title: 'AWS Certified Cloud Practitioner', description: 'Gained foundational knowledge of AWS cloud services and architecture.' }
    ]);
    setPhoto('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80');
  };

  const handleDownload = () => {
    const el = document.querySelector('.cv-preview-content');
    if (!el) return;
    const name = (info.fullName.trim() || 'Resume').replace(/[^a-z0-9]/gi, '_');
    html2pdf().set({
      margin: [0, 0, 0, 0],
      filename: `${name}_CV.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    }).from(el).save();
  };

  const handlePrint = () => window.print();

  const inputClass = 'w-full px-4 py-3 text-base rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-all';
  const labelClass = 'block text-sm font-semibold text-slate-600 dark:text-slate-400 mb-1.5';

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">

      {/* top bar */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 print:hidden">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <h1 className="text-lg font-semibold text-slate-800 dark:text-white">CV Builder</h1>
          <div className="flex gap-2">
            <button onClick={fillMockData} className="flex items-center gap-1.5 text-sm px-3 py-2 rounded-md bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors font-medium">
              <Wand2 className="w-4 h-4" /> <span className="hidden sm:inline">Auto Fill</span>
            </button>
            <button onClick={handlePrint} className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium">
              <Printer className="w-4 h-4" /> Print
            </button>
            <button onClick={handleDownload} className="flex items-center gap-1.5 text-sm px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium">
              <Download className="w-4 h-4" /> PDF
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          {/* ─── FORM PANEL ─── */}
          <div className="lg:col-span-2 print:hidden">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">

              {/* photo + name header */}
              <div className="p-5 border-b border-slate-100 dark:border-slate-800 flex items-center gap-4">
                <label className="relative cursor-pointer group flex-shrink-0">
                  {photo ? (
                    <img src={photo} alt="" className="w-14 h-14 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-700" />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <Camera className="w-5 h-5 text-slate-400" />
                    </div>
                  )}
                  <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Upload className="w-4 h-4 text-white" />
                  </div>
                  <input type="file" accept="image/*" onChange={onPhoto} className="hidden" />
                </label>
                <div className="min-w-0">
                  <p className="font-semibold text-slate-900 dark:text-white truncate text-base">{info.fullName || 'Your Name'}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 truncate">{info.title || 'Job Title'}</p>
                </div>
              </div>

              {/* step indicators */}
              <div className="px-5 pt-4 pb-2 flex gap-1 overflow-x-auto">
                {STEPS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setStep(i)}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-all ${step === i
                      ? 'bg-blue-600 text-white'
                      : i < step
                        ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                  >
                    {i < step && <Check className="w-3 h-3 inline mr-1" />}
                    {s}
                  </button>
                ))}
              </div>

              {/* form body */}
              <div className="p-5 space-y-4 max-h-[60vh] overflow-y-auto">

                {/* Step 0: Personal */}
                {step === 0 && (
                  <>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="col-span-2">
                        <label className={labelClass}>Full Name *</label>
                        <input name="fullName" value={info.fullName} onChange={set} placeholder="Ritesh Karki" className={inputClass} />
                      </div>
                      <div className="col-span-2">
                        <label className={labelClass}>Title *</label>
                        <input name="title" value={info.title} onChange={set} placeholder="Full Stack Developer" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Email *</label>
                        <input type="email" name="email" value={info.email} onChange={set} placeholder="you@email.com" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Phone</label>
                        <input type="tel" name="phone" value={info.phone} onChange={set} placeholder="+977 98xxx" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Location</label>
                        <input name="location" value={info.location} onChange={set} placeholder="Kathmandu, Nepal" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>LinkedIn</label>
                        <input name="linkedin" value={info.linkedin} onChange={set} placeholder="linkedin.com/in/you" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Website</label>
                        <input name="website" value={info.website} onChange={set} placeholder="yoursite.com" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Date of Birth</label>
                        <input name="dateOfBirth" value={info.dateOfBirth} onChange={set} placeholder="21 Aug 2004" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Father's Name</label>
                        <input name="fatherName" value={info.fatherName} onChange={set} placeholder="Father's name" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Nationality</label>
                        <input name="nationality" value={info.nationality} onChange={set} placeholder="Nepalese" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Religion</label>
                        <input name="religion" value={info.religion} onChange={set} placeholder="Hindu" className={inputClass} />
                      </div>
                      <div>
                        <label className={labelClass}>Gender</label>
                        <select name="gender" value={info.gender} onChange={set} className={inputClass}>
                          <option value="">Select</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className={labelClass}>Marital Status</label>
                        <select name="maritalStatus" value={info.maritalStatus} onChange={set} className={inputClass}>
                          <option value="">Select</option>
                          <option value="Unmarried">Unmarried</option>
                          <option value="Married">Married</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Step 1: Skills & Summary */}
                {step === 1 && (
                  <>
                    <div>
                      <label className={labelClass}>Skills (comma separated)</label>
                      <input name="skills" value={info.skills} onChange={set} placeholder="JavaScript, React, Python, Node.js" className={inputClass} />
                      {info.skills && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {info.skills.split(',').map((s, i) => s.trim() && (
                            <span key={i} className="px-2 py-0.5 text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-md">{s.trim()}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div>
                      <label className={labelClass}>Professional Summary</label>
                      <textarea name="summary" value={info.summary} onChange={set} rows="5" placeholder="Brief overview of your experience and what you bring to the table..." className={`${inputClass} resize-y`} />
                    </div>
                  </>
                )}

                {/* Step 2: Experience */}
                {step === 2 && (
                  <>
                    {experiences.map((exp, idx) => (
                      <div key={exp.id} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 relative">
                        {experiences.length > 1 && (
                          <button onClick={() => rmExp(exp.id)} className="absolute top-2 right-2 p-1 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 text-slate-400 hover:text-red-500 transition-colors">
                            <X className="w-4 h-4" />
                          </button>
                        )}
                        <p className="text-sm font-medium text-slate-400 mb-3">Experience {idx + 1}</p>
                        <div className="space-y-3">
                          <div>
                            <label className={labelClass}>Job Title</label>
                            <input value={exp.jobTitle} onChange={(e) => upExp(exp.id, 'jobTitle', e.target.value)} placeholder="Software Developer" className={inputClass} />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className={labelClass}>Company</label>
                              <input value={exp.company} onChange={(e) => upExp(exp.id, 'company', e.target.value)} placeholder="Company Name" className={inputClass} />
                            </div>
                            <div>
                              <label className={labelClass}>Duration</label>
                              <input value={exp.date} onChange={(e) => upExp(exp.id, 'date', e.target.value)} placeholder="2022 - Present" className={inputClass} />
                            </div>
                          </div>
                          <div>
                            <label className={labelClass}>Description</label>
                            <textarea value={exp.description} onChange={(e) => upExp(exp.id, 'description', e.target.value)} rows="2" placeholder="What you did there..." className={`${inputClass} resize-y`} />
                          </div>
                        </div>
                      </div>
                    ))}
                    <button onClick={addExp} className="w-full py-3 rounded-lg border-2 border-dashed border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-colors text-base font-medium flex items-center justify-center gap-1.5">
                      <Plus className="w-4 h-4" /> Add Experience
                    </button>
                  </>
                )}

                {/* Step 3: Education */}
                {step === 3 && (
                  <>
                    {educations.map((edu, idx) => (
                      <div key={edu.id} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 relative">
                        {educations.length > 1 && (
                          <button onClick={() => rmEdu(edu.id)} className="absolute top-2 right-2 p-1 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 text-slate-400 hover:text-red-500 transition-colors">
                            <X className="w-4 h-4" />
                          </button>
                        )}
                        <p className="text-sm font-medium text-slate-400 mb-3">Education {idx + 1}</p>
                        <div className="space-y-3">
                          <div>
                            <label className={labelClass}>Degree</label>
                            <input value={edu.degree} onChange={(e) => upEdu(edu.id, 'degree', e.target.value)} placeholder="B.Sc. Computer Science" className={inputClass} />
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className={labelClass}>Institution</label>
                              <input value={edu.school} onChange={(e) => upEdu(edu.id, 'school', e.target.value)} placeholder="University Name" className={inputClass} />
                            </div>
                            <div>
                              <label className={labelClass}>Duration</label>
                              <input value={edu.date} onChange={(e) => upEdu(edu.id, 'date', e.target.value)} placeholder="2020 - 2024" className={inputClass} />
                            </div>
                          </div>
                          <div>
                            <label className={labelClass}>Description</label>
                            <textarea value={edu.description} onChange={(e) => upEdu(edu.id, 'description', e.target.value)} rows="2" placeholder="GPA, honors, relevant coursework..." className={`${inputClass} resize-y`} />
                          </div>
                        </div>
                      </div>
                    ))}
                    <button onClick={addEdu} className="w-full py-3 rounded-lg border-2 border-dashed border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-colors text-base font-medium flex items-center justify-center gap-1.5">
                      <Plus className="w-4 h-4" /> Add Education
                    </button>
                  </>
                )}

                {/* Step 4: Training */}
                {step === 4 && (
                  <>
                    {trainings.map((tr, idx) => (
                      <div key={tr.id} className="p-4 rounded-lg border border-slate-200 dark:border-slate-700 relative">
                        {trainings.length > 1 && (
                          <button onClick={() => rmTr(tr.id)} className="absolute top-2 right-2 p-1 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 text-slate-400 hover:text-red-500 transition-colors">
                            <X className="w-4 h-4" />
                          </button>
                        )}
                        <p className="text-sm font-medium text-slate-400 mb-3">Training {idx + 1}</p>
                        <div className="space-y-3">
                          <div>
                            <label className={labelClass}>Title</label>
                            <input value={tr.title} onChange={(e) => upTr(tr.id, 'title', e.target.value)} placeholder="Course or certification name" className={inputClass} />
                          </div>
                          <div>
                            <label className={labelClass}>Description</label>
                            <textarea value={tr.description} onChange={(e) => upTr(tr.id, 'description', e.target.value)} rows="2" placeholder="What you learned..." className={`${inputClass} resize-y`} />
                          </div>
                        </div>
                      </div>
                    ))}
                    <button onClick={addTr} className="w-full py-3 rounded-lg border-2 border-dashed border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-blue-400 hover:text-blue-600 dark:hover:border-blue-500 dark:hover:text-blue-400 transition-colors text-base font-medium flex items-center justify-center gap-1.5">
                      <Plus className="w-4 h-4" /> Add Training
                    </button>
                  </>
                )}

                {/* Step 5: Preview confirmation */}
                {step === 5 && (
                  <div className="text-center py-6 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                      <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Ready to go</h3>
                      <p className="text-base text-slate-500 dark:text-slate-400 mt-1">Check the preview on the right. Download or print when you're happy with it.</p>
                    </div>
                    <div className="flex gap-3">
                      <button onClick={handleDownload} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors">
                        <Download className="w-4 h-4" /> Download PDF
                      </button>
                      <button onClick={handlePrint} className="flex-1 flex items-center justify-center gap-2 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        <Printer className="w-4 h-4" /> Print
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* nav buttons */}
              <div className="px-5 py-4 border-t border-slate-100 dark:border-slate-800 flex gap-3">
                {step > 0 && (
                  <button onClick={() => setStep(step - 1)} className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                    <ChevronLeft className="w-4 h-4" /> Back
                  </button>
                )}
                {step < STEPS.length - 1 && (
                  <button onClick={() => setStep(step + 1)} className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors ml-auto">
                    {step === STEPS.length - 2 ? 'Finish' : 'Next'} <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* ─── LIVE PREVIEW ─── */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden print:border-0 print:rounded-none">
              <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800 print:hidden">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Live Preview</p>
              </div>

              <div className="p-4 print:p-0 overflow-x-auto">
                <div className="cv-preview-content bg-white border border-slate-200 shadow-sm print:shadow-none print:border-0" style={{ fontFamily: 'Georgia, serif', width: '794px', minHeight: '1123px', margin: '0 auto' }}>
                  <div className="flex items-stretch min-h-[1123px]">

                    {/* sidebar */}
                    <div className="w-[220px] shrink-0 bg-slate-800 text-white p-6 flex flex-col" style={{ colorAdjust: 'exact', WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
                      {photo && <img src={photo} alt="" className="w-32 h-32 rounded-full object-cover border-4 border-blue-400 mx-auto mb-6" />}
                      <h1 className="text-xl font-bold text-center mb-2 break-words leading-tight">{info.fullName || 'Your Name'}</h1>
                      <p className="text-sm text-blue-300 text-center mb-8">{info.title || 'Your Title'}</p>

                      {(info.email || info.phone || info.location || info.linkedin || info.website) && (
                        <>
                          <h3 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4 border-b border-blue-400/30 pb-2">Contact</h3>
                          <div className="space-y-3 mb-8" style={{ fontSize: '13px' }}>
                            {info.email && <div className="flex items-center gap-3 break-all"><Mail className="w-3.5 h-3.5 flex-shrink-0 text-blue-400" /><span>{info.email}</span></div>}
                            {info.phone && <div className="flex items-center gap-3"><Phone className="w-3.5 h-3.5 flex-shrink-0 text-blue-400" /><span>{info.phone}</span></div>}
                            {info.location && <div className="flex items-center gap-3"><MapPin className="w-3.5 h-3.5 flex-shrink-0 text-blue-400" /><span>{info.location}</span></div>}
                            {info.linkedin && <div className="flex items-center gap-3 break-all"><Linkedin className="w-3.5 h-3.5 flex-shrink-0 text-blue-400" /><span>{info.linkedin}</span></div>}
                            {info.website && <div className="flex items-center gap-3 break-all"><Globe className="w-3.5 h-3.5 flex-shrink-0 text-blue-400" /><span>{info.website}</span></div>}
                          </div>
                        </>
                      )}

                      {info.skills && (
                        <div className="mt-12 pb-4">
                          <h3 className="text-sm font-bold uppercase tracking-widest text-blue-400 mb-4 border-b border-blue-400/30 pb-2">Skills</h3>
                          <div className="flex flex-wrap justify-center gap-2">
                            {info.skills.split(',').map((s, i) => s.trim() && (
                              <span key={i} className="flex items-center justify-center h-6 px-3 bg-blue-900 text-blue-100 rounded-full text-[12px] font-medium border border-blue-800/50 shadow-sm">{s.trim()}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* main content */}
                    <div className="flex-1 p-5">
                      {info.summary && (
                        <div className="mb-5 break-inside-avoid">
                          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-1.5 border-l-2 border-blue-500 pl-2">Summary</h2>
                          <p className="text-slate-600 leading-relaxed" style={{ fontSize: '12px' }}>{info.summary}</p>
                        </div>
                      )}

                      {(info.dateOfBirth || info.fatherName || info.nationality || info.gender || info.religion || info.maritalStatus) && (
                        <div className="mb-5 break-inside-avoid">
                          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-1.5 border-l-2 border-blue-500 pl-2">Personal Details</h2>
                          <div className="grid grid-cols-2 gap-x-3 gap-y-1" style={{ fontSize: '12px' }}>
                            {info.dateOfBirth && <div><span className="font-semibold text-slate-700">DOB:</span> <span className="text-slate-600">{info.dateOfBirth}</span></div>}
                            {info.fatherName && <div><span className="font-semibold text-slate-700">Father:</span> <span className="text-slate-600">{info.fatherName}</span></div>}
                            {info.nationality && <div><span className="font-semibold text-slate-700">Nationality:</span> <span className="text-slate-600">{info.nationality}</span></div>}
                            {info.gender && <div><span className="font-semibold text-slate-700">Gender:</span> <span className="text-slate-600">{info.gender}</span></div>}
                            {info.religion && <div><span className="font-semibold text-slate-700">Religion:</span> <span className="text-slate-600">{info.religion}</span></div>}
                            {info.maritalStatus && <div><span className="font-semibold text-slate-700">Status:</span> <span className="text-slate-600">{info.maritalStatus}</span></div>}
                          </div>
                        </div>
                      )}

                      {experiences.some(x => x.jobTitle || x.company) && (
                        <div className="mb-5 break-inside-avoid">
                          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-1.5 border-l-2 border-blue-500 pl-2">Experience</h2>
                          {experiences.map(exp => (exp.jobTitle || exp.company) && (
                            <div key={exp.id} className="mb-3 pb-2 border-b border-slate-100 last:border-0 last:pb-0 break-inside-avoid">
                              {exp.jobTitle && <h3 className="text-sm font-semibold text-slate-800">{exp.jobTitle}</h3>}
                              <div className="flex justify-between items-baseline">
                                {exp.company && <span className="text-blue-600 font-medium" style={{ fontSize: '12px' }}>{exp.company}</span>}
                                {exp.date && <span className="text-slate-400 italic" style={{ fontSize: '11px' }}>{exp.date}</span>}
                              </div>
                              {exp.description && <p className="text-slate-600 leading-relaxed mt-0.5" style={{ fontSize: '11px' }}>{exp.description}</p>}
                            </div>
                          ))}
                        </div>
                      )}

                      {educations.some(x => x.degree || x.school) && (
                        <div className="mb-5 break-inside-avoid">
                          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-1.5 border-l-2 border-blue-500 pl-2">Education</h2>
                          {educations.map(edu => (edu.degree || edu.school) && (
                            <div key={edu.id} className="mb-3 pb-2 border-b border-slate-100 last:border-0 last:pb-0 break-inside-avoid">
                              {edu.degree && <h3 className="text-sm font-semibold text-slate-800">{edu.degree}</h3>}
                              <div className="flex justify-between items-baseline">
                                {edu.school && <span className="text-blue-600 font-medium" style={{ fontSize: '12px' }}>{edu.school}</span>}
                                {edu.date && <span className="text-slate-400 italic" style={{ fontSize: '11px' }}>{edu.date}</span>}
                              </div>
                              {edu.description && <p className="text-slate-600 leading-relaxed mt-0.5" style={{ fontSize: '11px' }}>{edu.description}</p>}
                            </div>
                          ))}
                        </div>
                      )}

                      {trainings.some(x => x.title) && (
                        <div className="mb-5 break-inside-avoid">
                          <h2 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-1.5 border-l-2 border-blue-500 pl-2">Training</h2>
                          {trainings.map(t => t.title && (
                            <div key={t.id} className="mb-2 pb-1.5 border-b border-slate-100 last:border-0 last:pb-0 break-inside-avoid">
                              <h3 className="text-sm font-semibold text-slate-800">{t.title}</h3>
                              {t.description && <p className="text-slate-600 leading-relaxed mt-0.5" style={{ fontSize: '11px' }}>{t.description}</p>}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media print {
          @page { margin: 0; size: A4; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
          body { margin: 0; padding: 0; }
        }
      `}</style>
    </div>
  );
}