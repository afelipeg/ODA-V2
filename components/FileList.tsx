"use client"

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Plus, File } from 'lucide-react';

export default function FileList() {
  const [files, setFiles] = useState([
    { name: "Juntas Equipo OneTable Nestle M...", type: "pdf" },
    { name: "Revenue Split One Table Nestlé Q4 ...", type: "xlsx" },
    { name: "investor-seminar-2022-digital-tran...", type: "pptx" },
  ]);

  const handleFileUpload = (e) => {
    const newFile = e.target.files[0];
    if (newFile) {
      setFiles([...files, { name: newFile.name, type: newFile.type.split('/')[1] }]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Files</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add File
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Upload New File</DialogTitle>
            </DialogHeader>
            <Input type="file" onChange={handleFileUpload} />
          </DialogContent>
        </Dialog>
      </div>
      <div className="space-y-2">
        {files.map((file, index) => (
          <div key={index} className="flex items-center space-x-2">
            <File className="h-4 w-4" />
            <span className="text-sm truncate">{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}