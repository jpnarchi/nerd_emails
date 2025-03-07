import React from 'react';
import { Employee, Tag } from '../types';
import { X } from 'lucide-react';

interface EmployeeFormProps {
  onSubmit: (data: Partial<Employee>) => void;
  onCancel: () => void;
  tags: Tag[];
  departments: string[];
  initialData?: Employee;
}

export function EmployeeForm({
  onSubmit,
  onCancel,
  tags,
  departments,
  initialData,
  empresas,
}: EmployeeFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const data: Partial<Employee> = {
      fullName: formData.get('fullName') as string,
      documentId: formData.get('documentId') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      position: formData.get('position') as string,
      startDate: formData.get('startDate') as string,
      photo: formData.get('photo') as string,
      department: formData.get('department') as string,
      tagIds: Array.from(formData.getAll('tagIds') as string[]),
      nombre: formData.get('nombre') as string,
      segundNombre: formData.get('segundNombre') as string,
      apellidoMaterno: formData.get('apellidoM') as string,
      apellidoPaterno: formData.get('apellidoP') as string,
      empresa: formData.get('empresa') as string,
      genero: formData.get('genero') as string,
    };

    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">
          {initialData ? 'Editar Empleado' : 'Añadir Nuevo Empleado'}
        </h2>
        <button
          type="button"
          onClick={onCancel}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            defaultValue={initialData?.nombre}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Segundo nombre
          </label>
          <input
            type="text"
            name="segundNombre"
            defaultValue={initialData?.segundNombre}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Apellido Paterno
          </label>
          <input
            type="text"
            name="apellidoP"
            defaultValue={initialData?.apellidoPaterno}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Apellido Materno
          </label>
          <input
            type="text"
            name="apellidoM"
            defaultValue={initialData?.apellidoMaterno}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Numero de pasaporte
          </label>
          <input
            type="text"
            name="documentId"
            defaultValue={initialData?.documentId}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Correo electronico
          </label>
          <input
            type="email"
            name="email"
            defaultValue={initialData?.email}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Telefono
          </label>
          <input
            type="tel"
            name="phone"
            defaultValue={initialData?.phone}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Posición
          </label>
          <input
            type="text"
            name="position"
            defaultValue={initialData?.position}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Empresa
          </label>
          <select
            name="empresa"
            defaultValue={initialData?.empresa}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Selecciona una empresa</option>
            {empresas.map((empresa) => (
              <option key={empresa.id} value={empresa.name}>
                {empresa.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Departamento
          </label>
          <select
            name="department"
            defaultValue={initialData?.department}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Selecciona un departamento</option>
            {departments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Fecha de nacimiento
          </label>
          <input
            type="date"
            name="startDate"
            defaultValue={initialData?.startDate}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Sexo (Género)
          </label>
          <select
            name="genero"
            defaultValue={initialData?.genero}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Selecciona genero</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            URL de foto de perfil (opcional)
          </label>
          <input
            type="url"
            name="photo"
            defaultValue={initialData?.photo}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        {/* <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Etiquetas
          </label>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {tags.map((tag) => (
              <label
                key={tag.id}
                className="relative flex items-start"
              >
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    name="tagIds"
                    value={tag.id}
                    defaultChecked={initialData?.tagIds?.includes(tag.id)}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <span
                    className="font-medium text-gray-700"
                    style={{ color: tag.color }}
                  >
                    {tag.name}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div> */}
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
        >
          {initialData ? 'Actualizar Empleado' : 'Añadir Empleado'}
        </button>
      </div>
    </form>
  );
}