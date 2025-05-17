import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { useState } from 'react';

export default function MovieCard({ movie }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      sx={{ 
        maxWidth: 200,
        position: 'relative',
        transition: 'transform 0.3s ease-in-out',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        zIndex: isHovered ? 2 : 1,
        cursor: 'pointer',
        '&:hover': {
          boxShadow: '0 0 20px rgba(0,0,0,0.5)',
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardMedia
        component="img"
        height="300"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        sx={{
          objectFit: 'cover',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)',
          padding: 2,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <Typography 
          variant="subtitle1" 
          sx={{ 
            color: 'white',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
          }}
        >
          {movie.title}
        </Typography>
        {movie.vote_average && (
          <Typography 
            variant="body2" 
            sx={{ 
              color: '#E50914',
              fontWeight: 'bold',
              mt: 0.5,
            }}
          >
            ★ {movie.vote_average.toFixed(1)}
          </Typography>
        )}
      </Box>
    </Card>
  );
}
