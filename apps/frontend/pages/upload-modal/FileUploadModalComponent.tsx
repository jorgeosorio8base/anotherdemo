import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Textarea, Select, SelectItem, RadioGroup, Radio, Button } from '@nextui-org/react';
import { Icon } from '@iconify/react';

const mockCategories = [
  { value: 'ebook', label: 'E-Book' },
  { value: 'article', label: 'Article' },
  { value: 'video', label: 'Video' },
  { value: 'audio', label: 'Audio' }
];

export function FileUploadModalComponent() {
  return (
    <Modal isOpen={true} onClose={() => {}} className="max-w-3xl">
      <ModalContent className="bg-[hsl(var(--app-background-50))] text-[hsl(var(--app-foreground-900))] p-6 rounded-lg appShadow-[var(--app-box-shadow-medium)]">
        <ModalHeader className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">Upload Digital Resource</h2>
        </ModalHeader>
        <ModalBody>
          <form className="grid grid-cols-12 gap-4">
            <div className="col-span-12 border-2 border-dashed border-[hsl(var(--app-primary-200))] rounded-lg p-4 text-center">
              <label className="font-semibold mb-2">File</label>
              <div className="flex flex-col items-center justify-center min-h-[150px]">
                <Icon icon="hugeicons:upload-02" className="text-3xl text-[hsl(var(--app-primary-500))] mb-2" />
                <p className="text-sm text-[hsl(var(--app-foreground-600))]">Click to upload or drag and drop</p>
                <p className="text-xs text-[hsl(var(--app-foreground-400))] mt-1">PDF, EPUB, MOBI (MAX. 100MB)</p>
              </div>
            </div>
            
            <div className="col-span-12">
              <Input label="Title" placeholder="Enter resource title" />
            </div>
            
            <div className="col-span-12">
              <Input label="Author" placeholder="Enter author name" />
            </div>
            
            <div className="col-span-12">
              <Textarea 
                label="Description" 
                placeholder="Enter resource description"
                minRows={3}
                maxRows={5}
              />
            </div>
            
            <div className="col-span-12">
              <Select 
                label="Category" 
                placeholder="Select a category"
              >
                {mockCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
            
            <div className="col-span-12">
              <RadioGroup label="Access Permissions">
                <Radio value="public">Public</Radio>
                <Radio value="restricted">Restricted</Radio>
              </RadioGroup>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button auto color="default" variant="flat">Cancel</Button>
          <Button auto color="primary">Upload</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
