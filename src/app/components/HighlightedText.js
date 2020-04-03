import React from 'react';
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    highlightedText: {
        padding: '3px 5px',
        fontSize: 12,
        borderRadius: 3,
        lineHeight: 'normal'
    },
}));

function HighlightedText(props) {

    const {
        variant = 'body2',
        text,
        bg = '#800080',
        color = '#fff',
        style = {}
    } = props;

    const classes = useStyles();

    return (
        <Typography
            component="span"
            noWrap
            variant={variant}
            className={classes.highlightedText}
            style={{
                backgroundColor: bg,
                color,
                ...style
            }}
        >
            {text}
        </Typography>
    );
}

export default HighlightedText;