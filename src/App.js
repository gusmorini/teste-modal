import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Container, Modal, Backdrop, Fade } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(5),
    height: "100%",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(3)
    }
  },
  modal: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-end",
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      margin: theme.spacing(0),
      paddingBottom: theme.spacing(5),
      display: "block"
    }
  },
  paper: {
    backgroundColor: theme.palette.background.default,
    border: "1px solid #e1e1e1",
    boxShadow: theme.shadows[10],
    padding: theme.spacing(2, 4, 3),
    outline: 0,
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "300px",
    maxHeight: "400px",
    overflow: "auto",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
      maxHeight: "100%",
      borderRadius: 0
    }
  }
}));

function App() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleOpen}
        >
          modal
        </Button>

        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                iure, officia numquam est laborum officiis sed at repellat
                reprehenderit asperiores, nemo totam assumenda harum rem dolor
                accusantium quam. Eum, illo!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                iure, officia numquam est laborum officiis sed at repellat
                reprehenderit asperiores, nemo totam assumenda harum rem dolor
                accusantium quam. Eum, illo!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                iure, officia numquam est laborum officiis sed at repellat
                reprehenderit asperiores, nemo totam assumenda harum rem dolor
                accusantium quam. Eum, illo!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                iure, officia numquam est laborum officiis sed at repellat
                reprehenderit asperiores, nemo totam assumenda harum rem dolor
                accusantium quam. Eum, illo!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                iure, officia numquam est laborum officiis sed at repellat
                reprehenderit asperiores, nemo totam assumenda harum rem dolor
                accusantium quam. Eum, illo!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                iure, officia numquam est laborum officiis sed at repellat
                reprehenderit asperiores, nemo totam assumenda harum rem dolor
                accusantium quam. Eum, illo!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
                iure, officia numquam est laborum officiis sed at repellat
                reprehenderit asperiores, nemo totam assumenda harum rem dolor
                accusantium quam. Eum, illo!
              </p>
              <Button
                variant="contained"
                color="secondary"
                size="medium"
                onClick={handleClose}
              >
                fechar
              </Button>
            </div>
          </Fade>
        </Modal>
      </Container>
    </>
  );
}

export default App;
