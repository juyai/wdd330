const index = document.querySelector('#index');

const links = [
    {
      label: "Week 1 notes",
      url: "week1/index.html"
    },

    {
        label: "Week 2 notes",
        url: "week2/index.html"
    },

    {
      label: "Week 3 notes",
      url: "week3/index.html"
  },

  {
    label: "Week 4 notes",
    url: "week4/index.html"
  },

  {
    label: "Week 5 notes",
    url: "week5/index.html"
  },

  {
    label: "Todo App",
    url: "todoapp/index.html"
  },

  {
    label: "Week 7 notes",
    url: "week7/index.html"
  },

  {
    label: "Week 8 notes",
    url: "week8/index.html"
  },

  {
    label: "Week 9 notes",
    url: "week9/team-activity/index.html"
  }
  ]

links.forEach(link => {
    const list = document.createElement('li');
    const linked = document.createElement('a');
    linked.setAttribute('href', link.url);
    linked.setAttribute('target', '_blank');
    linked.innerHTML = link.label;

    list.append(linked);
    index.appendChild(list);
})