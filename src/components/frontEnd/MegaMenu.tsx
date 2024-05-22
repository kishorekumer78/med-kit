'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
import { megaMenu } from '@/config/data';

export function MegaMenu() {
	return (
		<NavigationMenu>
			<NavigationMenuList className="space-x-4">
				{megaMenu.map((section, i) => (
					<NavigationMenuItem key={i} className="">
						<NavigationMenuTrigger className="text-gray-50 bg-blue-800">
							{section.title}
						</NavigationMenuTrigger>
						<NavigationMenuContent className="bg-blue-950">
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
								{section.services.map((service, i) => (
									<ListItem
										key={i}
										title={service.title}
										href={`/services/${service.slug}`}
										className="hover:bg-blue-800"
									>
										{service.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
	({ className, title, children, ...props }, ref) => {
		return (
			<li>
				<NavigationMenuLink asChild>
					<a
						ref={ref}
						className={cn(
							'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:zoom-in-10',
							'text-gray-50',
							className
						)}
						{...props}
					>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-gray-50/40">
							{children}
						</p>
					</a>
				</NavigationMenuLink>
			</li>
		);
	}
);
ListItem.displayName = 'ListItem';
