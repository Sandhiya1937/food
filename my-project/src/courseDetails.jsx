import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box, Card, CardMedia, CardContent } from "@mui/material";

const courseData = {
  "C Programming": {
    description: "Learn the fundamentals of C programming including syntax, functions, and memory management.",
    image: "https://source.unsplash.com/600x400/?coding,c",
  },
  "React Development": {
    description: "Master React.js and build dynamic web applications with hooks, state management, and APIs.",
    image: "https://source.unsplash.com/600x400/?react,code",
  },
  "Node.js Backend": {
    description: "Understand backend development with Node.js, Express.js, and database integration.",
    image: "https://source.unsplash.com/600x400/?nodejs,server",
  },
};

const CourseDetails = () => {
  const { courseName } = useParams();
  const course = courseData[courseName] || {};

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h3">{courseName}</Typography>
        <Card sx={{ mt: 3, boxShadow: 5, borderRadius: 3 }}>
          <CardMedia component="img" height="300" image={course.image} alt={courseName} />
          <CardContent>
            <Typography variant="body1">{course.description}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default CourseDetails;
