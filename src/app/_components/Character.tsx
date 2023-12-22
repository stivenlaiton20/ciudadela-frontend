import { Character as ICharacter } from "@/app/_interfaces/Character";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const Character = (character: ICharacter) => {
  return (
    <Card className="w-72 p-2 shadow-md mb-10 mt-10">
      <CardMedia
        component="img"
        alt="character pic"
        height="140"
        image={character.image}
      />
      <CardContent className="mt-3">
        <Typography variant="h5" component="div">
          {character.name}
        </Typography>
      </CardContent>
      <List className="p-0">
        <ListItem>
          <ListItemText primary={`Status: ${character.status}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Location: ${character.location}`} />
        </ListItem>
        <ListItem>
          <ListItemText primary={`Specie: ${character.species}`} />
        </ListItem>
      </List>
    </Card>
  );
};

export default Character;
