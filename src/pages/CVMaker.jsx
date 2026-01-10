import { useState } from 'react';
import html2pdf from "html2pdf.js";

const CVMaker = () => {
  const [photoData, setPhotoData] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    fullName: '', title: '', email: '', phone: '', location: '', linkedin: '', 
    website: '', summary: '', skills: '', dateOfBirth: '', fatherName: '', 
    nationality: '', gender: '', religion: '', maritalStatus: ''
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

  const steps = ['Personal Info', 'Skills', 'Summary', 'Experience', 'Education', 'Training', 'Preview'];

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => setPhotoData(event.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const addExperience = () => setExperiences([...experiences, { id: Date.now(), jobTitle: '', company: '', date: '', description: '' }]);
  const removeExperience = (id) => setExperiences(experiences.filter(exp => exp.id !== id));
  const updateExperience = (id, field, value) => setExperiences(experiences.map(exp => exp.id === id ? { ...exp, [field]: value } : exp));

  const addEducation = () => setEducations([...educations, { id: Date.now(), degree: '', school: '', date: '', description: '' }]);
  const removeEducation = (id) => setEducations(educations.filter(edu => edu.id !== id));
  const updateEducation = (id, field, value) => setEducations(educations.map(edu => edu.id === id ? { ...edu, [field]: value } : edu));

  const addTraining = () => setTrainings([...trainings, { id: Date.now(), title: '', description: '' }]);
  const removeTraining = (id) => setTrainings(trainings.filter(train => train.id !== id));
  const updateTraining = (id, field, value) => setTrainings(trainings.map(train => train.id === id ? { ...train, [field]: value } : train));

  const handlePrint = () => window.print();

 
const handleDownload = () => {
  const name = formData.fullName.trim() || "Resume";
  const sanitizedName = name.replace(/[^a-z0-9]/gi, "_");
  const filename = `${sanitizedName}_CV.pdf`;

  const element = document.querySelector(".cv-preview-content");

  const opt = {
    margin: 0,
    filename,
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2, useCORS: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf().set(opt).from(element).save();
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-100 p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 print:hidden">
          <h1 className="text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-slate-800 bg-clip-text text-transparent">Professional CV Builder</h1>
          <p className="text-lg text-slate-600">Create a stunning resume in minutes</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 max-h-[85vh] overflow-hidden print:hidden">
            <div className="bg-gradient-to-r from-blue-600 to-slate-800 text-white px-6 py-5 sticky top-0 z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {photoData ? (
                    <img src={photoData} alt="Profile" className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md" />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-xl">👤</div>
                  )}
                  <div>
                    <h3 className="font-semibold text-base">{formData.fullName || 'Your Name'}</h3>
                    <p className="text-xs opacity-90">{formData.title || 'Professional Title'}</p>
                  </div>
                </div>
                <label className="bg-white text-slate-800 px-4 py-2 rounded-lg text-sm font-semibold cursor-pointer hover:bg-blue-50 transition-colors">
                  {photoData ? 'Change' : 'Upload'}
                  <input type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                </label>
              </div>
            </div>

            <div className="overflow-y-auto" style={{maxHeight: 'calc(85vh - 80px)'}}>
              <div className="p-6">
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                  {steps.map((step, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentStep(idx)}
                      className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                        currentStep === idx 
                          ? 'bg-slate-800 text-white shadow-md' 
                          : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {idx + 1}. {step}
                    </button>
                  ))}
                </div>

                <h2 className="text-2xl font-bold text-slate-800 mb-6 pb-2 border-b-2 border-blue-500">{steps[currentStep]}</h2>

            {currentStep === 0 && (
              <div>
                {[
                  { label: 'Full Name *', name: 'fullName', placeholder: 'John Doe' },
                  { label: 'Professional Title *', name: 'title', placeholder: 'Software Developer' },
                  { label: 'Email *', name: 'email', type: 'email', placeholder: 'john@example.com' },
                  { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 234 567 890' },
                  { label: 'Location', name: 'location', placeholder: 'New York, USA' },
                  { label: 'LinkedIn', name: 'linkedin', placeholder: 'linkedin.com/in/johndoe' },
                  { label: 'Website', name: 'website', placeholder: 'www.johndoe.com' },
                  { label: 'Date of Birth', name: 'dateOfBirth', placeholder: '21 Aug 2004' },
                  { label: "Father's Name", name: 'fatherName', placeholder: 'Gyan Kumar Karki' },
                  { label: 'Nationality', name: 'nationality', placeholder: 'Nepalese' },
                  { label: 'Religion', name: 'religion', placeholder: 'Hindu' }
                ].map(field => (
                  <div key={field.name} className="mb-4">
                    <label className="block mb-2 text-slate-700 font-medium text-sm">{field.label}</label>
                    <input
                      type={field.type || 'text'}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleInputChange}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                    />
                  </div>
                ))}
                <div className="mb-4">
                  <label className="block mb-2 text-slate-700 font-medium text-sm">Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all">
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-700 font-medium text-sm">Marital Status</label>
                  <select name="maritalStatus" value={formData.maritalStatus} onChange={handleInputChange} className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all">
                    <option value="">Select Status</option>
                    <option value="Unmarried">Unmarried</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Widowed">Widowed</option>
                  </select>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-700 font-medium text-sm">Add Skills (comma separated)</label>
                  <input
                    type="text"
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    placeholder="JavaScript, React, Node.js, CSS, HTML"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                  />
                  <p className="text-xs text-slate-500 mt-2">Separate each skill with a comma</p>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div>
                <div className="mb-4">
                  <label className="block mb-2 text-slate-700 font-medium text-sm">Professional Summary</label>
                  <textarea
                    name="summary"
                    value={formData.summary}
                    onChange={handleInputChange}
                    placeholder="Brief overview of your professional background and key achievements..."
                    rows="6"
                    className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none resize-y transition-all"
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div>
                {experiences.map(exp => (
                  <div key={exp.id} className="bg-slate-50 p-5 rounded-lg mb-4 border border-slate-200 relative">
                    <button onClick={() => removeExperience(exp.id)} className="absolute top-3 right-3 bg-red-500 text-white w-7 h-7 rounded-full text-sm hover:bg-red-600 transition-colors flex items-center justify-center">✕</button>
                    {['jobTitle', 'company', 'date'].map(field => (
                      <div key={field} className="mb-3">
                        <label className="block mb-2 text-slate-700 font-medium text-sm">{field === 'jobTitle' ? 'Job Title' : field === 'company' ? 'Company' : 'Duration'}</label>
                        <input
                          type="text"
                          value={exp[field]}
                          onChange={(e) => updateExperience(exp.id, field, e.target.value)}
                          placeholder={field === 'jobTitle' ? 'Senior Developer' : field === 'company' ? 'Tech Company Inc.' : 'Jan 2020 - Present'}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                        />
                      </div>
                    ))}
                    <div className="mb-0">
                      <label className="block mb-2 text-slate-700 font-medium text-sm">Description</label>
                      <textarea
                        value={exp.description}
                        onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                        placeholder="Key responsibilities and achievements..."
                        rows="3"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none resize-y transition-all"
                      />
                    </div>
                  </div>
                ))}
                <button onClick={addExperience} className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full">+ Add Experience</button>
              </div>
            )}

            {currentStep === 4 && (
              <div>
                {educations.map(edu => (
                  <div key={edu.id} className="bg-slate-50 p-5 rounded-lg mb-4 border border-slate-200 relative">
                    <button onClick={() => removeEducation(edu.id)} className="absolute top-3 right-3 bg-red-500 text-white w-7 h-7 rounded-full text-sm hover:bg-red-600 transition-colors flex items-center justify-center">✕</button>
                    {['degree', 'school', 'date'].map(field => (
                      <div key={field} className="mb-3">
                        <label className="block mb-2 text-slate-700 font-medium text-sm">{field === 'degree' ? 'Degree' : field === 'school' ? 'Institution' : 'Duration'}</label>
                        <input
                          type="text"
                          value={edu[field]}
                          onChange={(e) => updateEducation(edu.id, field, e.target.value)}
                          placeholder={field === 'degree' ? 'Bachelor of Computer Science' : field === 'school' ? 'University Name' : '2016 - 2020'}
                          className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                        />
                      </div>
                    ))}
                    <div className="mb-0">
                      <label className="block mb-2 text-slate-700 font-medium text-sm">Description</label>
                      <textarea
                        value={edu.description}
                        onChange={(e) => updateEducation(edu.id, 'description', e.target.value)}
                        placeholder="Major achievements, GPA, honors..."
                        rows="3"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none resize-y transition-all"
                      />
                    </div>
                  </div>
                ))}
                <button onClick={addEducation} className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full">+ Add Education</button>
              </div>
            )}

            {currentStep === 5 && (
              <div>
                {trainings.map(train => (
                  <div key={train.id} className="bg-slate-50 p-5 rounded-lg mb-4 border border-slate-200 relative">
                    <button onClick={() => removeTraining(train.id)} className="absolute top-3 right-3 bg-red-500 text-white w-7 h-7 rounded-full text-sm hover:bg-red-600 transition-colors flex items-center justify-center">✕</button>
                    <div className="mb-3">
                      <label className="block mb-2 text-slate-700 font-medium text-sm">Training/Course Title</label>
                      <input
                        type="text"
                        value={train.title}
                        onChange={(e) => updateTraining(train.id, 'title', e.target.value)}
                        placeholder="Advance Knowledge in Computer"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all"
                      />
                    </div>
                    <div className="mb-0">
                      <label className="block mb-2 text-slate-700 font-medium text-sm">Description</label>
                      <textarea
                        value={train.description}
                        onChange={(e) => updateTraining(train.id, 'description', e.target.value)}
                        placeholder="Details about the training or experience..."
                        rows="3"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none resize-y transition-all"
                      />
                    </div>
                  </div>
                ))}
                <button onClick={addTraining} className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full">+ Add Training</button>
              </div>
            )}

            {currentStep === 6 && (
              <div className="text-center py-8">
                <div className="mb-6">
                  <svg className="w-20 h-20 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Your CV is Ready!</h3>
                  <p className="text-slate-600">Review your CV on the right and download when ready.</p>
                </div>
                <div className="space-y-3">
                  <button onClick={handleDownload} className="w-full bg-green-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md flex items-center justify-center gap-2">
                    <span>📥</span> Download PDF
                  </button>
                  <button onClick={handlePrint} className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center gap-2">
                    <span>🖨️</span> Print CV
                  </button>
                </div>
              </div>
            )}

                <div className="flex gap-3 mt-6 pt-6 border-t border-slate-200">
                  {currentStep > 0 && (
                    <button onClick={() => setCurrentStep(currentStep - 1)} className="flex-1 bg-slate-200 text-slate-700 px-5 py-2.5 rounded-lg font-medium hover:bg-slate-300 transition-colors">← Previous</button>
                  )}
                  {currentStep < steps.length - 1 && (
                    <button onClick={() => setCurrentStep(currentStep + 1)} className="flex-1 bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                      {currentStep === steps.length - 2 ? 'Done ✓' : 'Next →'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-slate-200 print:p-0 print:shadow-none print:border-0 print:rounded-none">
            <div className="p-6 border-b border-slate-200 print:hidden">
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <span>👁️</span> Live Preview
              </h2>
            </div>

            <div className="p-6 print:p-0">
              <div className="cv-preview-content bg-white border border-slate-200 shadow-sm print:shadow-none print:border-0">
              <div className="grid grid-cols-[300px_1fr]">
                <div className="bg-slate-800 text-white p-8" style={{colorAdjust: 'exact', WebkitPrintColorAdjust: 'exact'}}>
                  {photoData && <img src={photoData} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 mx-auto mb-6 shadow-xl" />}
                  <h1 className="text-2xl font-bold mb-2 text-center break-words">{formData.fullName || 'Your Name'}</h1>
                  <p className="text-base mb-2 opacity-95 text-center">{formData.title || 'Your Professional Title'}</p>

                  {(formData.email || formData.phone || formData.location || formData.linkedin || formData.website) && (
                    <>
                      <h3 className="text-blue-400 text-lg font-bold mt-8 mb-4 border-b-2 border-blue-400 pb-2 uppercase tracking-wide">Contact</h3>
                      {formData.email && <div className="mb-3 text-sm opacity-90 break-words">📧 {formData.email}</div>}
                      {formData.phone && <div className="mb-3 text-sm opacity-90">📱 {formData.phone}</div>}
                      {formData.location && <div className="mb-3 text-sm opacity-90">📍 {formData.location}</div>}
                      {formData.linkedin && <div className="mb-3 text-sm opacity-90 break-words">🔗 {formData.linkedin}</div>}
                      {formData.website && <div className="mb-3 text-sm opacity-90 break-words">🌐 {formData.website}</div>}
                    </>
                  )}
   
                  {formData.skills && (
                    <>
                      <h3 className="text-blue-400 text-lg font-bold mt-8 mb-4 border-b-2 border-blue-400 pb-2 uppercase tracking-wide">Skills</h3>
                      <div className="flex flex-wrap gap-2">
                        {formData.skills.split(',').map((skill, i) => skill.trim() && <span key={i} className="bg-blue-500 text-white px-3 py-2 rounded text-sm font-medium">{skill.trim()}</span>)}
                      </div>
                    </>   
                  )} 
                </div>

                <div className="p-8 bg-white">
                  {formData.summary && (
                    <div className="mb-8">
                      <h2 className="text-slate-800 text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4 uppercase tracking-wide">Summary</h2>
                      <p className="text-slate-700 leading-relaxed text-sm">{formData.summary}</p>
                    </div>
                  )}

                  {(formData.dateOfBirth || formData.fatherName || formData.nationality || formData.gender || formData.religion || formData.maritalStatus) && (
                    <div className="mb-8">
                      <h2 className="text-slate-800 text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4 uppercase tracking-wide">Personal Details</h2>
                      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                        {formData.dateOfBirth && <div className="text-sm"><span className="font-semibold text-slate-700">DOB:</span> <span className="text-slate-600">{formData.dateOfBirth}</span></div>}
                        {formData.fatherName && <div className="text-sm"><span className="font-semibold text-slate-700">Father's Name:</span> <span className="text-slate-600">{formData.fatherName}</span></div>}
                        {formData.nationality && <div className="text-sm"><span className="font-semibold text-slate-700">Nationality:</span> <span className="text-slate-600">{formData.nationality}</span></div>}
                        {formData.gender && <div className="text-sm"><span className="font-semibold text-slate-700">Gender:</span> <span className="text-slate-600">{formData.gender}</span></div>}
                        {formData.religion && <div className="text-sm"><span className="font-semibold text-slate-700">Religion:</span> <span className="text-slate-600">{formData.religion}</span></div>}
                        {formData.maritalStatus && <div className="text-sm"><span className="font-semibold text-slate-700">Marital Status:</span> <span className="text-slate-600">{formData.maritalStatus}</span></div>}
                      </div>
                    </div>
                  )}

                  {experiences.some(exp => exp.jobTitle || exp.company) && (
                    <div className="mb-8">
                      <h2 className="text-slate-800 text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4 uppercase tracking-wide">Experience</h2>
                      {experiences.map(exp => (exp.jobTitle || exp.company) && (
                        <div key={exp.id} className="mb-5 pb-4 border-b border-slate-200 last:border-0">
                          {exp.jobTitle && <h3 className="text-slate-800 text-lg font-semibold mb-1">{exp.jobTitle}</h3>}
                          {exp.company && <div className="text-blue-500 font-semibold mb-1">{exp.company}</div>}
                          {exp.date && <div className="text-slate-500 italic mb-2 text-sm">{exp.date}</div>}
                          {exp.description && <p className="text-slate-600 leading-relaxed text-sm">{exp.description}</p>}
                        </div>
                      ))}
                    </div>
                  )}

                  {educations.some(edu => edu.degree || edu.school) && (
                    <div className="mb-8">
                      <h2 className="text-slate-800 text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4 uppercase tracking-wide">Education</h2>
                      {educations.map(edu => (edu.degree || edu.school) && (
                        <div key={edu.id} className="mb-5 pb-4 border-b border-slate-200 last:border-0">
                          {edu.degree && <h3 className="text-slate-800 text-lg font-semibold mb-1">{edu.degree}</h3>}
                          {edu.school && <div className="text-blue-500 font-semibold mb-1">{edu.school}</div>}
                          {edu.date && <div className="text-slate-500 italic mb-2 text-sm">{edu.date}</div>}
                          {edu.description && <p className="text-slate-600 leading-relaxed text-sm">{edu.description}</p>}
                        </div>
                      ))}
                    </div>
                  )}

                  {trainings.some(t => t.title) && (
                    <div className="mb-8">
                      <h2 className="text-slate-800 text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-4 uppercase tracking-wide">Training & Experience</h2>
                      {trainings.map(t => t.title && (
                        <div key={t.id} className="mb-5 pb-4 border-b border-slate-200 last:border-0">
                          <h3 className="text-slate-800 text-lg font-semibold mb-2">{t.title}</h3>
                          {t.description && <p className="text-slate-600 leading-relaxed text-sm">{t.description}</p>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              </div>
            </div>

            <div className="p-6 grid grid-cols-2 gap-3 border-t border-slate-200 print:hidden">
              {currentStep !== 6 && (
                <>
                  <button onClick={handlePrint} className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-sm flex items-center justify-center gap-2">
                    <span>🖨️</span> Print CV
                  </button>
                  <button onClick={handleDownload} className="bg-green-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-sm flex items-center justify-center gap-2">
                    <span>📥</span> Download PDF
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          @page { margin: 0; size: A4; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default CVMaker;