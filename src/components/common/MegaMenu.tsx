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
import MaxWidthWrapper from './MaxWidthWrapper';

export function MegaMenu() {
	return (
		<div className="w-full z-50 bg-teal-100 fixed top-16 border-t border-gray-400/30">
			<MaxWidthWrapper>
				<NavigationMenu>
					<NavigationMenuList className="space-x-4">
						{megaMenu.map((section, i) => (
							<NavigationMenuItem key={i} className="hover:bg-teal-300">
								<NavigationMenuTrigger className="tracking-wider font-semibold">
									{section.title}
								</NavigationMenuTrigger>
								<NavigationMenuContent className="z-50">
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] z-50">
										{section.services.map((service, i) => (
											<ListItem
												key={i}
												title={service.title}
												href={`/services/${service.slug}`}
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
			</MaxWidthWrapper>
		</div>
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
							'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-teal-300 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
							className
						)}
						{...props}
					>
						<div className="text-sm font-medium leading-none">{title}</div>
						<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
							{children}
						</p>
					</a>
				</NavigationMenuLink>
			</li>
		);
	}
);
ListItem.displayName = 'ListItem';
