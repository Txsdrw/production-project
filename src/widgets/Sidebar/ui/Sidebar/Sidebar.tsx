import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeToggle } from 'widgets/ThemeToggle';
import { LangToggle } from 'widgets/LangToggle/ui/LangToggle';
import style from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div className={classNames(style.Sidebar, { [style.collapsed]: collapsed }, [className])}>
            <button type="button" onClick={onToggle}>toggle</button>
            <div className={style.switchers}>
                <ThemeToggle />
                <LangToggle className={style.lang} />
            </div>
        </div>
    );
};
