import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Editor from "./Editor/editor";
import ExploreModal from "../Pages/ExploreModal";
function CardComponentForExplore(props) {
  const [answerModal, setAnswerModal] = React.useState(false);
  const [viewAnswer, setViewAnswer] = React.useState(false);
  console.log(props.data);
  return (
    <>
      <Card sx={{ maxWidth: 300, margin: 6 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={props.data.questionImage}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.data.questionTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.data.questionDescription}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => {
              setAnswerModal(true);
            }}
          >
            View Answer{" "}
          </Button>
        </CardActions>
      </Card>
      <ExploreModal
        modalShow={answerModal}
        setModalShow={setAnswerModal}
        data={props.data.tutorans}
      />
    </>
  );
}

export default CardComponentForExplore;
