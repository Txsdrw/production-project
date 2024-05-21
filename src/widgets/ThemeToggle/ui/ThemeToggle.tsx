import {Theme, useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";

import style from './ThemeToggle.module.scss'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import {Button, ThemeButton} from "shared/ui/Button/ui/Button";

interface ThemeToggle {
    className?: string;
}

export const ThemeToggle = ({className}: ThemeToggle) => {
    const {theme, toggleTheme} = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(style.ThemeToggle, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};
