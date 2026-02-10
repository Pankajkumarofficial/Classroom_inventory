import { Subject } from "@/types";

export const Mock_subjects: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to computer science",
        department: "CS",
        description: "An introduction to computer architecture",
        createdAt: new Date().toISOString()
    },
    {
        id: 2,
        code: "Math201",
        name: "Calculas it",
        department: "Math",
        description: "An introduction to Maths",
        createdAt: new Date().toISOString()
    },
    {
        id: 3,
        code: "Eng202",
        name: "Literature and review",
        department: "English",
        description: "An introduction to English ",
        createdAt: new Date().toISOString()
    },
]