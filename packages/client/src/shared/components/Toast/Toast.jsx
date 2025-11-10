import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function Toast({ message, severity }) {
  return (
    <Snackbar open={true} autoHideDuration={2000} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} sx={{ position: 'fixed' }}>
      <Alert
        variant="filled"
        severity={severity}
        sx={{
          bgcolor: 'green.600',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: 2,
        }}>
        {message}
      </Alert>
    </Snackbar>
  );
}
