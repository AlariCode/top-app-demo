import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';
import { motion } from 'framer-motion';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow != 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow == 'down'
			})}>
				<ArrowIcon />
			</span>}
		</motion.button>
	);
};