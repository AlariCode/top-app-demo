import { PProps } from './P.props';
import styles from './P.module.css';
import cn from 'classnames';

export const P = ({ size = 'm', children, className, ...props }: PProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.s]: size == 's',
				[styles.m]: size == 'm',
				[styles.l]: size == 'l',
			})}
			{...props}
		>
			{children}
		</p>
	);
};