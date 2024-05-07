import {ReactElement, ComponentProps} from 'react';
import {ArrowRightIcon} from '@/client/icons';
import cn from 'clsx';

export function Summary({
                            children,
                            ...props
                        }: ComponentProps<'summary'>): ReactElement {
    return (
        <summary
            className="nx-flex nx-items-center nx-cursor-pointer nx-p-1 nx-transition-colors hover:nx-bg-gray-100 dark:hover:nx-bg-neutral-800"
            {...props}
        >
            {children}
            <ArrowRightIcon
                className={cn(
                    'nx-order-first', // if prettier formats `summary` it will have unexpected margin-top
                    'nx-size-4 nx-shrink-0 nx-mx-1.5',
                    'rtl:nx-rotate-180 [[data-expanded]>summary>&]:nx-rotate-90 nx-transition'
                )}
                pathClassName="nx-stroke-[3px]"
            />
        </summary>
    )
}


