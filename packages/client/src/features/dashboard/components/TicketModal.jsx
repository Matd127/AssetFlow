import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, MenuItem, Box, Autocomplete } from "@mui/material";
import { primaryButtonStyles } from 'shared/styles/buttonStyles';

const priorities = ["High", "Medium", "Low"];
const statuses = ["Open", "In Progress", "Closed"];
const mockUsers = ["John Doe", "Jane Smith", "Peter Jones", "Emily White", "Michael Brown"];

export default function TicketModal({ open, onClose, onSubmit, onUpdate, item }) {
  const [form, setForm] = useState({
    subject: "",
    priority: "Medium",
    status: "Open",
    user: "",
    date: "",
  });

  useEffect(() => {
    if (item) {
      setForm(item);
    } else {
      setForm({ subject: "", priority: "Medium", status: "Open", user: "", date: "" });
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
    setForm({ subject: "", priority: "Medium", status: "Open", user: "", date: "" });
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{item ? "Edit Ticket" : "Add New Ticket"}</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField label="Subject" name="subject" value={form.subject} onChange={handleChange} fullWidth required />
          <TextField select label="Priority" name="priority" value={form.priority} onChange={handleChange} fullWidth required>
            {priorities.map(priority => (
              <MenuItem key={priority} value={priority}>{priority}</MenuItem>
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
              <TextField {...params} label="User" fullWidth required />
            )}
            freeSolo
          />
          <TextField label="Date" name="date" value={form.date} onChange={handleChange} fullWidth required type="date" InputLabelProps={{ shrink: true }} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained" sx={primaryButtonStyles}>{item ? "Update Ticket" : "Add Ticket"}</Button>
      </DialogActions>
    </Dialog>
  );
}
