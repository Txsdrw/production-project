import {classNames} from "shared/lib/classNames/classNames";
import style from './Sidebar.module.scss'
import {useState} from "react";
import {ThemeToggle} from "widgets/ThemeToggle";

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
    const [collapsed, setCollapsed] =   useState(false);
    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return (
        <div className={classNames(style.Sidebar, {[style.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle }>toggle</button>
            <div className={style.switchers}>
                <ThemeToggle />

            </div>
        </div>
    );
};
