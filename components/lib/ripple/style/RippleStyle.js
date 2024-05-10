import BaseStyle from 'primevue/base/style';

const theme = ({ dt }) => `
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`;

const classes = {
    root: 'p-ink'
};

export default BaseStyle.extend({
    name: 'ripple-directive',
    theme,
    classes
});
