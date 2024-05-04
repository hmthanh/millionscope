import { ReactElement, ComponentProps } from 'react';
import { ArrowRightIcon } from '@/client/icons/arrow-right';
import cn from 'clsx';

export function Summary({
    children,
    ...props
}: ComponentProps<'summary'>): ReactElement {
    return (
        <summary
            className="_flex _items-center _cursor-pointer _p-1 _transition-colors hover:_bg-gray-100 dark:hover:_bg-neutral-800"
            {...props}
        >
            {children}
            <ArrowRightIcon
                className={cn(
                    '_order-first', // if prettier formats `summary` it will have unexpected margin-top
                    '_size-4 _shrink-0 _mx-1.5',
                    'rtl:_rotate-180 [[data-expanded]>summary>&]:_rotate-90 _transition'
                )}
                pathClassName="_stroke-[3px]"
            />
        </summary>
    )
}