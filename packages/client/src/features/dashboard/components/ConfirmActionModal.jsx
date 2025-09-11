import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';
import { primaryButtonStyles } from 'shared/styles/buttonStyles';

export default function ConfirmActionModal({ open, onClose, onConfirm, title = 'Are you sure?', description = '', confirmLabel = 'Confirm', cancelLabel = 'Cancel', danger = false }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mt: 1, mb: 2 }}>
          {description}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>{cancelLabel}</Button>
        <Button
          onClick={onConfirm}
          variant="contained"
          sx={{ ...primaryButtonStyles, bgcolor: danger ? 'error.main' : undefined, '&:hover': { bgcolor: danger ? 'error.dark' : undefined } }}
        >
          {confirmLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
