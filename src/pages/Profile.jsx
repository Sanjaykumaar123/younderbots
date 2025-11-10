import { useState } from "react";

export default function Profile() {
  const stored = JSON.parse(localStorage.getItem("profile")) || {
    name: "",
    role: "",
    email: "",
    avatar: ""
  };

  const [form, setForm] = useState(stored);

  const save = () => {
    localStorage.setItem("profile", JSON.stringify(form));
    alert("Profile Updated ✅");
  };
  const Clear = () => {
    localStorage.removeitem("profile",JSON.stringify(form));
  }  

  return (
    <div className="card">
      <h2>Update Profile</h2>

      <input value={form.name} placeholder="Name"
        onChange={(e)=>setForm({...form, name:e.target.value})} />

      <input value={form.role} placeholder="Role"
        onChange={(e)=>setForm({...form, role:e.target.value})} />

      <input value={form.email} placeholder="Email"
        onChange={(e)=>setForm({...form, email:e.target.value})} />

      <label>Upload Profile Image</label>
      <input type="file" accept="image/*"
        onChange={e => {
          const reader = new FileReader();
          reader.onload = () => setForm({...form, avatar: reader.result});
          reader.readAsDataURL(e.target.files[0]);
        }} 
      />

      <button onClick={save}>Save</button>
      <button onClick={Clear}>Clear</button>
    </div>
  );
}
