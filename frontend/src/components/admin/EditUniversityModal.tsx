import { University } from '../../types/university';
import { UniversityForm } from './UniversityForm';

interface EditUniversityModalProps {
  university: University;
  onUpdate: (data: University) => void;
  onClose: () => void;
  isLoading?: boolean;
}

export function EditUniversityModal({ 
  university, 
  onUpdate, 
  onClose, 
  isLoading 
}: EditUniversityModalProps) {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Edit University</h2>
        <UniversityForm
          university={university}
          onSubmit={onUpdate}
          onCancel={onClose}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}