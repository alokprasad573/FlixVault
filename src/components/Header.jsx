import { AppBar, Toolbar, Typography, InputBase, Box, Button } from '@mui/material';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

export default function Header({ onSearch }) {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backdropFilter: 'blur(10px)',
        boxShadow: 'none',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography 
            variant="h5" 
            sx={{ 
              color: '#E50914',
              fontWeight: 'bold',
              letterSpacing: '0.5px',
              mr: 4
            }}
          >
            FlixVault
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" sx={{ '&:hover': { color: '#E50914' } }}>Home</Button>
            <Button color="inherit" sx={{ '&:hover': { color: '#E50914' } }}>Movies</Button>
            <Button color="inherit" sx={{ '&:hover': { color: '#E50914' } }}>TV Shows</Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 1,
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
            },
            width: { xs: '100%', sm: 'auto' },
            maxWidth: 300,
          }}
        >
          <SearchIcon sx={{ color: 'white', ml: 1 }} />
          <InputBase
            placeholder="Search…"
            onKeyDown={(e) => {
              if (e.key === 'Enter') onSearch(e.target.value);
            }}
            sx={{
              color: 'white',
              padding: '8px 8px 8px 0',
              width: '100%',
              '& input::placeholder': {
                color: 'rgba(255, 255, 255, 0.7)',
              },
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
