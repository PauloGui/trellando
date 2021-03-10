export function loadLists() {
  return [
    {
      title: "To Do",
      creatable: true,
      cards: [
        {
          id: 1,
          content: "Estudar módulo 01 de NodeJS",
          labels: ["#0B9ED9"],
          user: "https://github.com/PauloGui.png",
        },
        {
          id: 2,
          content: "Estudar Kanban",
          labels: ["#0B9ED9"],
          user: "https://github.com/PauloGui.png",
        },
        {
          id: 3,
          content: "Estudar módulo 03 de React Native",
          labels: ["#0B9ED9"],
          user: "https://github.com/PauloGui.png",
        },
        {
          id: 4,
          content: "Martelar a cadeira",
          labels: ["#F25CA2"],
          user: "https://github.com/PauloGui.png",
        },
        {
          id: 5,
          content: "Verificar tudo antes do merge",
          labels: ["#F25CA2"],
          user: "https://github.com/PauloGui.png",
        },
      ],
    },
    {
      title: "In progress",
      creatable: false,
      cards: [
        {
          id: 6,
          content: "Remoção do redirect",
          labels: [],
          user: "https://github.com/PauloGui.png",
        },
      ],
    },
    {
      title: "Pause",
      creatable: false,
      cards: [
        {
          id: 7,
          content: "React Native",
          labels: ["#0B9ED9"],
          user: "https://github.com/PauloGui.png",
        },
        {
          id: 8,
          content: "Gravar testes e deploy ReactJS",
          labels: ["#F25CA2"],
          user: "https://github.com/PauloGui.png",
        },
        {
          id: 9,
          content: "Ajustes na biblioteca unform",
          labels: [],
        },
      ],
    },
    {
      title: "Done",
      creatable: false,
      done: true,
      cards: [
        {
          id: 10,
          content: "Assistir aula sobre deploy e CI com React Native",
          labels: [],
        },
        {
          id: 12,
          content: "Fazer testes e deploy ReactJS",
          labels: ["#F25CA2"],
        },
        {
          id: 13,
          content:
            'Assistir aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          labels: ["#0B9ED9"],
        },
      ],
    },
  ];
}
