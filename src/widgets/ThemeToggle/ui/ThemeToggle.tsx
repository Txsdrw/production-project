import {useTheme} from "app/providers/ThemeProvider/lib/useTheme";
import {classNames} from "shared/lib/classNames/classNames";

import style from './ThemeToggle.module.scss'

interface ThemeToggle {
    className?: string;
}

export const ThemeToggle = ({className}: ThemeToggle) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <button className={classNames(style.ThemeToggle, {}, [className])} onClick={toggleTheme}>Theme</button>
    );
};
