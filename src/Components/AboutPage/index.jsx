import { Container, Grid, Typography } from '@material-ui/core'
import { useStyles } from './styles'

const AboutPage = () => {
    const classes = useStyles()

    return (
        <Grid>
            <Typography className={classes.title}>
                &nbsp;ABOUT&nbsp;&nbsp;
            </Typography>

            <Container className={classes.box}>
                <Typography variant="h6">About Tour Of Heroes</Typography>
                <Typography className={classes.paragraph} variant="body1">
                    Tour of heroes is a simple minimalist web application that displays, stores and updates records and information of heroes and villains.
                </Typography>
            </Container>

            <Container className={classes.box}>
                <Typography variant="h6">About Us</Typography>
                <Typography className={classes.paragraph} variant="body1">
                    TourOfHeroes Inc. develop web applications and attend to our customer's needs.
                </Typography>
            </Container>

            <Container className={classes.box}>
                <Typography variant="h6">Copyright</Typography>
                <Typography className={classes.paragraph} variant="body1">
                    This computer software, more specifically the program code, is protected by copyright as an owned software.
                    There may also be third party packages or source code copyright work associated with this computer software.
                    This copyrighted computer program is not allowed to be duplicated, copied or have an act of taking
                    a direct copy of the code (source code or compiled code). This software here hereby copyrighted and the owner
                    may only edit it and take any action within the source code. This software is hereby protected and is in terms
                    of licensing and is enforced by law.
                </Typography>
                <Typography className={classes.paragraph} variant="body1">
                    Copyright © 2021 - TourOfHeroes Inc. All Rights Reserved.
                </Typography>
            </Container>
        </Grid>

    )
}

export default AboutPage