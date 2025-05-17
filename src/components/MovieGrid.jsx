import { useNavigate } from "react-router-dom";
import { Grid, Box, Typography, Container } from "@mui/material";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies, title }) {
  const navigate = useNavigate();

  return (
    <Container maxWidth="xl">
      <Box sx={{ mb: 6 }}>
        {title && (
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'white',
              fontWeight: 'bold',
              mb: 2,
              textAlign: 'center',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            {title}
          </Typography>
        )}
        <Grid 
          container 
          spacing={2} 
          sx={{ 
            justifyContent: 'flex-start',
            margin: '0 auto',
            maxWidth: '90%',
            '& .MuiGrid-item': {
              transition: 'transform 0.3s ease-in-out',
            },
          }}
        >
          {movies.map((movie) => (
            <Grid 
              item 
              key={movie.id}
              onClick={() => navigate(`/movie/${movie.id}`)}
            >
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
