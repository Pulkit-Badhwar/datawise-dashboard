import React, { useState } from "react";

// interface UserForm {
//   name: string;
//   email: string;
//   number: string;
//   role: string;
// }

const UserManagement = () => {
  const [formData, setFormData] = useState<UserForm>({
    name: "",
    number: "",
    email: "",
    role: "user",
  });
  const [errors, setErrors] = useState<Partial<UserForm>>({});

  const validateForm = () => {
    // const newErrors: Partial<UserForm> = {};
    console.log("form data in validdate fomr:::", formData);
    console.log("new errors in validate form", newErrors);
    console.log("erros", errors);
    
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.number) newErrors.number = "Phone Number is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!/^\+?[1-9]\d{1,14}$/.test(formData.number)) {
      newErrors.number = "Invalid phone number format";
    }
    return newErrors;
  };

  const handleSubmit = () => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted:");
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (
    // e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // if (errors[name as keyof UserForm]) {
    //   setErrors((prev) => ({ ...prev, [name]: undefined }));
    // }
  };

  return (
    <div>
      <div className="header">
        <h1>User Management</h1>
      </div>

      <div className="form-container">
        <h2 style={{ marginBottom: "20px" }}>Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="number">Phone Number</label>
            <input
              type="number"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
            {errors.number && <div className="error">{errors.number}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="role">Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          <button type="submit">Add User</button>
        </form>
      </div>
    </div>
  );
};

export default UserManagement;
