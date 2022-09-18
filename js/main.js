const index = document.querySelector('#index');

const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    },

    {
        label: "Week2 notes",
        url: "week2/index.html"
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