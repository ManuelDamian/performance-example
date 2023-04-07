import { Card, CardActions, CardMedia, Container, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Listper from "../listofperformance/listperformance";
import Continueb from "../continuebutton/continuebutton";
import "./performance.css";

const performance = () => {
    return (
        <Container className="main-content">
            <Card className="cardconteiner" >
                <CardMedia className="infocontent">
                    <span>Hola</span>
                </CardMedia>
                <div className="allinfo">
                    <CardContent className="contentarea">
                        <Typography className="card-tittle" variant="h5" component="div">
                            Summary
                        </Typography>
                        <Listper/>
                    </CardContent>
                    <CardActions className="actionarea">
                        <Continueb/>
                    </CardActions>
                </div>
            </Card>
        </Container>
    )

}
export default performance