import Button from '@material-ui/core/Button';
import './Button.scss';

const ButtonRenderer = (props) => {
    let className =  + 'ButtonRenderer';
    if (props.color === 'primary') {
        className = 'PrimaryButtonRenderer';
    }
    
    return <Button {...props} className={className} variant="contained" />
}

export default ButtonRenderer;
