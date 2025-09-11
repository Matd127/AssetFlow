import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, Box, Autocomplete } from "@mui/material";
import { primaryButtonStyles } from 'shared/styles/buttonStyles';

const categories = ["Laptop", "Monitor", "Mobile", "Accessory", "Furniture"];
const statuses = ["Assigned", "In Stock", "In Repair"];
const mockUsers = ["John Doe", "Jane Smith", "Peter Jones", "Emily White", "Michael Brown"];

export default function AssetModal({ open, onClose, onSubmit, onUpdate, item }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    status: "Assigned",
    user: "",
  });

  useEffect(() => {
    if (item) {
      setForm(item);
    } else {
      setForm({ name: "", category: "", status: "Assigned", user: "" });
    }
  }, [item, open]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (item && onUpdate) {
      onUpdate(form);
    } else {
      onSubmit(form);
    }
    setForm({ name: "", category: "", status: "Assigned", user: "" });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{item ? "Edit Asset" : "Add New Asset"}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField label="Asset Name" name="name" value={form.name} onChange={handleChange} fullWidth required />
          <TextField select label="Category" name="category" value={form.category} onChange={handleChange} fullWidth required>
            {categories.map(cat => (
              <MenuItem key={cat} value={cat}>{cat}</MenuItem>
            ))}
          </TextField>
          <TextField select label="Status" name="status" value={form.status} onChange={handleChange} fullWidth required>
            {statuses.map(status => (
              <MenuItem key={status} value={status}>{status}</MenuItem>
            ))}
          </TextField>
          <Autocomplete
            options={mockUsers}
            value={form.user}
            onChange={(_, value) => setForm({ ...form, user: value || "" })}
            renderInput={(params) => (
              <TextField {...params} label="Assigned To" fullWidth required />
            )}
            freeSolo
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" sx={primaryButtonStyles}>{item ? "Update Asset" : "Add Asset"}</Button>
      </DialogActions>
    </Dialog>
  );
}
