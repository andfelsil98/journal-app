import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid 
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
      sx={{ mb: 1, width:'100%' }}
    >
      <Grid>
        <Typography
          fontSize={ 20 }
          fontWeight='light'
        >
          20 de Abril, 2025
        </Typography>
      </Grid>

      <Grid>
        <Button color="primary" sx={{ padding: 2 }}>
          <SaveOutlined 
            sx={{ fontSize:30, mr: 1 }}
          />
          Guardar
        </Button>
      </Grid>

      <Grid container sx={{ width:'100%'}}>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un titulo"
          label="titulo"
          sx={{ border: 'none', mb:1 }}
        >
        </TextField>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="Que sucedio en el dia de hoy?"
          label="Que sucedio en el dia de hoy?"
          minRows={5}
        >
        </TextField>
      </Grid>

      {/* Image gallery */}
      <ImageGallery />

    </Grid>
  )
}
