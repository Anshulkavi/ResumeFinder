
import React, { useState, useRef } from 'react';
import { Upload, FileText, Check, X, AlertTriangle, Award, BookOpen, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

const ResumeAnalyzer = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const mockJobs = [
    {
      title: "Front-End Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      salary: "$95,000 - $120,000",
      match: "95%",
      matchScore: 95,
      skills: ["React", "JavaScript", "TypeScript", "CSS"],
      description: "Join our team to build responsive web applications using modern frameworks."
    },
    {
      title: "UI/UX Designer",
      company: "Creative Solutions",
      location: "Remote",
      salary: "$85,000 - $105,000",
      match: "87%",
      matchScore: 87,
      skills: ["Figma", "User Research", "Prototyping", "Adobe XD"]
    },
    {
      title: "Full Stack Engineer",
      company: "WebApp Systems",
      location: "Austin, TX",
      salary: "$110,000 - $140,000",
      match: "82%",
      matchScore: 82,
      skills: ["Node.js", "React", "MongoDB", "AWS"]
    }
  ];

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      handleFileValidation(droppedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      handleFileValidation(selectedFile);
    }
  };

  const handleFileValidation = (selectedFile: File) => {
    const validTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    
    if (!validTypes.includes(selectedFile.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or Word document.",
        variant: "destructive",
      });
      return;
    }
    
    if (selectedFile.size > 5 * 1024 * 1024) { // 5MB limit
      toast({
        title: "File too large",
        description: "Please upload a file smaller than 5MB.",
        variant: "destructive",
      });
      return;
    }
    
    setFile(selectedFile);
    toast({
      title: "File added",
      description: "Your resume has been added and is ready for analysis.",
    });
  };

  const handleUpload = () => {
    if (!file) return;
    
    setIsUploading(true);
    
    setTimeout(() => {
      setIsUploading(false);
      setIsAnalyzing(true);
      
      // Simulate analysis progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 5;
        setAnalysisProgress(progress);
        
        if (progress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsAnalyzing(false);
            setShowResults(true);
          }, 500);
        }
      }, 100);
    }, 1500);
  };

  const handleClose = () => {
    setShowResults(false);
    setFile(null);
    setAnalysisProgress(0);
  };

  const handleBrowse = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <section id="resumeAnalyzer" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Upload Your Resume & <span className="gradient-text">Find Your Perfect Job</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Our AI will analyze your resume and find the best job matches based on your skills, experience, and qualifications.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl shadow-sm animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div 
            className={`border-2 border-dashed rounded-lg p-8 flex flex-col items-center justify-center transition-all duration-300 ${
              isDragging ? 'border-brand-blue bg-blue-50' : file ? 'border-brand-blue' : 'border-slate-300 hover:border-brand-blue hover:bg-slate-50'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              id="resumeUpload"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              ref={fileInputRef}
            />
            
            {!file ? (
              <>
                <div className={`bg-slate-100 p-4 rounded-full mb-4 transition-transform duration-300 ${isDragging ? 'scale-110' : ''}`}>
                  <Upload className={`h-8 w-8 ${isDragging ? 'text-brand-blue' : 'text-slate-500'}`} />
                </div>
                <h3 className="text-xl font-medium mb-2">
                  {isDragging ? 'Drop your resume here' : 'Drag your resume here'}
                </h3>
                <p className="text-slate-500 mb-6 text-center">
                  or click to browse files<br /><span className="text-sm">(PDF, DOC, DOCX up to 5MB)</span>
                </p>
                <Button 
                  className="cursor-pointer hover-up transition-all duration-300 hover:shadow-md"
                  onClick={handleBrowse}
                >
                  Select File
                </Button>
              </>
            ) : (
              <>
                <div className="bg-blue-50 p-4 rounded-full mb-4">
                  <FileText className="h-8 w-8 text-brand-blue" />
                </div>
                <h3 className="text-xl font-medium mb-1">{file.name}</h3>
                <p className="text-slate-500 mb-2">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                
                {isAnalyzing ? (
                  <div className="w-full max-w-md mb-6">
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Analyzing resume...</span>
                      <span>{analysisProgress}%</span>
                    </div>
                    <Progress value={analysisProgress} className="h-2" />
                    <div className="mt-3 text-xs text-slate-500">
                      {analysisProgress < 30 && "Extracting skills and experience..."}
                      {analysisProgress >= 30 && analysisProgress < 60 && "Identifying career patterns..."}
                      {analysisProgress >= 60 && analysisProgress < 90 && "Matching with job openings..."}
                      {analysisProgress >= 90 && "Finalizing recommendations..."}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col sm:flex-row gap-4 mt-4">
                    <Button 
                      onClick={handleUpload} 
                      disabled={isUploading}
                      className="hover-up transition-all duration-300 flex gap-2 items-center"
                    >
                      {isUploading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Uploading...
                        </>
                      ) : (
                        <>Analyze Resume</>
                      )}
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setFile(null)} 
                      disabled={isUploading}
                      className="transition-colors hover:border-red-300 hover:text-red-600"
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        <Dialog open={showResults} onOpenChange={setShowResults}>
          <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl text-center">Job Matches Based on Your Resume</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <div className="flex items-center justify-center gap-2 mb-6 text-brand-teal">
                <Check className="h-6 w-6" />
                <p className="font-medium">Your resume has been successfully analyzed</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <Award className="h-5 w-5 text-brand-blue" />
                  </div>
                  <h4 className="font-semibold">Skills Match</h4>
                  <p className="text-2xl font-bold text-brand-blue">92%</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <BookOpen className="h-5 w-5 text-brand-blue" />
                  </div>
                  <h4 className="font-semibold">Experience Level</h4>
                  <p className="text-lg font-bold text-brand-blue">Mid-Senior</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center mx-auto mb-2 shadow-sm">
                    <Briefcase className="h-5 w-5 text-brand-blue" />
                  </div>
                  <h4 className="font-semibold">Job Matches</h4>
                  <p className="text-2xl font-bold text-brand-blue">24</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-4">Top Matches</h3>
              <div className="space-y-4 mb-6">
                {mockJobs.map((job, index) => (
                  <div 
                    key={index} 
                    className="bg-white border border-slate-200 p-5 rounded-xl transition-all duration-300 hover:shadow-md group cursor-pointer"
                  >
                    <div className="flex justify-between items-start flex-col sm:flex-row gap-4 sm:gap-0">
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-brand-blue transition-colors">{job.title}</h3>
                        <p className="text-slate-600">{job.company} • {job.location}</p>
                        <p className="text-slate-600 text-sm mt-1">{job.salary}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-14 h-14 relative">
                          <svg viewBox="0 0 36 36" className="rotate-[-90deg]">
                            <circle cx="18" cy="18" r="16" fill="none" 
                              className="stroke-slate-200" 
                              strokeWidth="3"
                            />
                            <circle cx="18" cy="18" r="16" fill="none" 
                              className="stroke-brand-blue transition-all duration-1000 ease-out"
                              strokeWidth="3"
                              strokeDasharray={`${job.matchScore} 100`}
                            />
                          </svg>
                          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold">
                            {job.match}
                          </span>
                        </div>
                        <span className="bg-brand-blue/10 text-brand-blue font-medium px-3 py-1 rounded-full text-sm hidden md:block">
                          {job.match} Match
                        </span>
                      </div>
                    </div>
                    {job.description && (
                      <p className="mt-3 text-slate-600 text-sm">{job.description}</p>
                    )}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {job.skills.map((skill, i) => (
                        <span key={i} className="bg-slate-100 px-2 py-1 text-xs rounded transition-colors group-hover:bg-blue-100 group-hover:text-brand-blue">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Button size="sm" variant="outline" className="text-xs">Apply Now</Button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center">
                <Button onClick={handleClose} className="px-6">
                  View All 24 Job Matches
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ResumeAnalyzer;
