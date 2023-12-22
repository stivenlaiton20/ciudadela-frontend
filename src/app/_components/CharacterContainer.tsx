import Character from "./Character";
import { Character as ICharacter } from "@/app/_interfaces/Character";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

interface Props {
  characters: ICharacter[];
  loading: boolean;
}
const SkeletonCard = () => {
  return (
    <Card className="m-2 mb-15 h-full w-72">
      <Skeleton variant="rectangular" height={310} width={260} />

      <CardContent>
        <Skeleton variant="text" width={100} />
        <Skeleton variant="text" width={80} />
        <Skeleton variant="text" width={120} />
      </CardContent>

      <CardMedia>
        <Skeleton variant="rectangular" height={0} />
      </CardMedia>
    </Card>
  );
};

const CharacterContainer = ({ characters, loading }: Props) => {
  if (loading) {
    const skeletonCards = Array.from({ length: 12 }, (_, index) => (
      <SkeletonCard key={index} />
    ));

    return <>{skeletonCards}</>;
  }

  return (
    <>
      {characters.length > 0 &&
        characters.map((character: ICharacter) => (
          <div className="grid grid-cols-4 gap-3" key={character.id}>
            <Character {...character} />
          </div>
        ))}
    </>
  );
};

export default CharacterContainer;
