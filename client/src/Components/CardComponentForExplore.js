import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Editor from "./Editor/editor";
function CardComponentForExplore(props) {
  const [viewAnswer, setViewAnswer] = React.useState(false);
  console.log(props.data);
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={props.data.questionImage}
        />
        <CardContent>
          {viewAnswer ? (
            <Typography gutterBottom variant="h5" component="div">
              <Editor data={props.data.tutorans} />
            </Typography>
          ) : (
            <>
              <Typography gutterBottom variant="h5" component="div">
                {props.data.questionTitle}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.data.questionDescription}
              </Typography>
            </>
          )}
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              setViewAnswer(!viewAnswer);
            }}
          >
            View Answer{" "}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default CardComponentForExplore;
