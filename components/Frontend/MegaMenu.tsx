"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const megaMenu = [
  {
    title: "Most Requested Tutors",
    Services: [
      {
        title: "Virtual Classroom",
        slug: "virtual-classroom",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Video Assignment Review",
        slug: "video-assig-review",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "In-person Tutoring Session",
        slug: "in-person-session",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Student Progress Consultation",
        slug: "student-prg-consultation",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Emergency Academic Support",
        slug: "emergency-support",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Mental Health and Well-being Support",
        slug: "mental-health-support",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Immediate Academic Assistance",
        slug: "immediate-academic-assistance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
    ],
  },
  {
    title: "Teachers",
    Services: [
      {
        title: "Virtual Classroom",
        slug: "virtual-classroom",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Video Assignment Review",
        slug: "video-assig-review",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "In-person Tutoring Session",
        slug: "in-person-session",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Student Progress Consultation",
        slug: "student-prg-consultation",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Emergency Academic Support",
        slug: "emergency-support",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Mental Health and Well-being Support",
        slug: "mental-health-support",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Immediate Academic Assistance",
        slug: "immediate-academic-assistance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
    ],
  },
  {
    title: "Subject Experts",
    Services: [
      {
        title: "Virtual Classroom",
        slug: "virtual-classroom",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Video Assignment Review",
        slug: "video-assig-review",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "In-person Tutoring Session",
        slug: "in-person-session",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Student Progress Consultation",
        slug: "student-prg-consultation",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Emergency Academic Support",
        slug: "emergency-support",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Mental Health and Well-being Support",
        slug: "mental-health-support",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Immediate Academic Assistance",
        slug: "immediate-academic-assistance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
    ],
  },
  {
    title: "Learning Challenges",
    Services: [
      {
        title: "Virtual Classroom",
        slug: "virtual-classroom",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Video Assignment Review",
        slug: "video-assig-review",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "In-person Tutoring Session",
        slug: "in-person-session",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Student Progress Consultation",
        slug: "student-prg-consultation",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Emergency Academic Support",
        slug: "emergency-support",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Mental Health and Well-being Support",
        slug: "mental-health-support",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
      {
        title: "Immediate Academic Assistance",
        slug: "immediate-academic-assistance",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, saepe id, distinctio odio",
      },
    ],
  },
];
export default function MegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-4">
        {megaMenu.map((item, i) => {
          return (
            <NavigationMenuItem key={i}>
              <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {item.Services.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={`/services${component.slug}`}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
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
});
ListItem.displayName = "ListItem";
