const data = {
  produtos: [
    {
      id: 1,
      nome: "Nike Air Force 1 '07",
      preco: 799.90,
      categoria: "Casual",
      imagem: "img/images.jpg",
      descricao: "O brilho vive no Nike Air Force 1 '07, o ícone do basquete que dá um toque moderno.",
      emEstoque: true
    },
    {
      id: 2,
      nome: "Adidas Ultraboost Light",
      preco: 1199.90,
      categoria: "Corrida",
      imagem: "img/adidas.jpg",
      descricao: "Experimente a energia épica com o novo Ultraboost Light, nosso Ultraboost mais leve de todos.",
      emEstoque: true
    },
    {
      id: 3,
      nome: "Jordan Air 1 Retro High",
      preco: 1499.90,
      categoria: "Basquete",
      imagem: "img/jordan.jpg",
      descricao: "Estilo lendário inspirado na herança das quadras de basquete dos anos 80.",
      emEstoque: false
    },
    {
      id: 4,
      nome: "Puma RS-X Efekt",
      preco: 699.90,
      categoria: "Casual",
      imagem: "img/pulma.jpg",
      descricao: "Design futurista-retro com silhueta arrojada e camadas de materiais premium.",
      emEstoque: true
    },
    {
      id: 5,
      nome: "Mizuno Wave Prophecy 12",
      preco: 1799.90,
      categoria: "Corrida",
      imagem: "img/mizuno.jpg",
      descricao: "Máximo amortecimento com a tecnologia Wave para corridas de alta performance.",
      emEstoque: true
    },
    {
      id: 6,
      nome: "Nike Lebron XXI",
      preco: 1399.90,
      categoria: "Basquete",
      imagem: "img/nikee.jpg",
      descricao: "Desenvolvido para agilidade, contenção e baixo perfil nas quadras de basquete.",
      emEstoque: false
    },
    {
      id: 7,
      nome: "Vans Old Skool Classic",
      preco: 399.90,
      categoria: "Skate",
      imagem: "img/vans.jpg",
      descricao: "O clássico tênis de skate da Vans com a icônica listra lateral em couro.",
      emEstoque: true
    },
    {
      id: 8,
      nome: "Nike SB Dunk Low",
      preco: 899.90,
      categoria: "Skate",
      imagem: "img/nike low.jpg",
      descricao: "Amortecimento e tração otimizados para a prática do skate e uso diário.",
      emEstoque: true
    }
  ]
};

function formatPrice(preco) {
  return preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function createProductCard(produto) {
  const card = document.createElement("div");

  card.classList.add("card");
  card.setAttribute("data-id", produto.id);

  card.innerHTML = `
    <a href="detalhes.html?id=${produto.id}">
      <img src="${produto.imagem}" alt="${produto.nome}">
    </a>

    <h3 class="card-title">${produto.nome}</h3>

    <p class="card-price">
      ${formatPrice(produto.preco)}
    </p>

    <p>Categoria: ${produto.categoria}</p>

    <div class="card-buttons">
      <a href="detalhes.html?id=${produto.id}"
         class="btn-details">
        Ver detalhes
      </a>

      <button class="btn-highlight">
        Destacar
      </button>
    </div>
  `;

  const btnHighlight = card.querySelector(".btn-highlight");

  btnHighlight.addEventListener("click", function() {
    card.classList.toggle("highlight");
  });

  return card;
}


function renderProducts(produtos) {
  const productList = document.getElementById("product-list");

  if (!productList) return;

  productList.innerHTML = "";

  if (produtos.length === 0) {
    productList.innerHTML = "<p>Nenhum tênis encontrado.</p>";
    return;
  }

  produtos.forEach(function(produto) {
    const card = createProductCard(produto);
    productList.appendChild(card);
  });
}

function renderCategories() {
  const categorySelect = document.getElementById("category");

  if (!categorySelect) return;

  const categorias = [
    "Todas",
    ...new Set(data.produtos.map(p => p.categoria))
  ];

  categorySelect.innerHTML = "";

  categorias.forEach(function(categoria) {
    const option = document.createElement("option");

    option.value = categoria;
    option.textContent = categoria;

    categorySelect.appendChild(option);
  });
}


function filterProducts() {
  const searchInput = document.getElementById("search");
  const categorySelect = document.getElementById("category");

  const pesquisa = searchInput.value.toLowerCase();
  const categoria = categorySelect.value;

  return data.produtos.filter(function(produto) {
    const correspondeNome = produto.nome
      .toLowerCase()
      .includes(pesquisa);

    const correspondeCategoria =
      categoria === "Todas" ||
      produto.categoria === categoria;

    return correspondeNome && correspondeCategoria;
  });
}


function showProductDetails() {
  const productDetails = document.getElementById("product-details");

  if (!productDetails) return;

  const parametros = new URLSearchParams(window.location.search);

  const id = Number(parametros.get("id"));

 
  const produto = data.produtos.find(function(item) {
    return item.id === id;
  });

 
  if (!produto) {
    productDetails.innerHTML = `
      <h2>Produto não encontrado!</h2>
      <p>Verifique o produto selecionado.</p>
    `;
    return;
  }

  const statusEstoque = produto.emEstoque
    ? "Disponível no estoque"
    : "Produto esgotado";

  const classeEstoque = produto.emEstoque
    ? "text-success"
    : "text-danger";

  // Montar detalhes dinamicamente
  productDetails.innerHTML = `
    <div class="details-content">

      <img
        src="${produto.imagem}"
        alt="${produto.nome}"
        class="details-image"
      >

      <div class="details-info">
        <h2>${produto.nome}</h2>

        <p class="card-price">
          ${formatPrice(produto.preco)}
        </p>

        <p>
          <strong>Categoria:</strong>
          ${produto.categoria}
        </p>

        <p>
          <strong>Disponibilidade:</strong>
          <span class="${classeEstoque}">
            ${statusEstoque}
          </span>
        </p>

        <p>
          <strong>Descrição:</strong>
          ${produto.descricao}
        </p>
      </div>

    </div>
  `;
}


function iniciarPagina() {
  const productList = document.getElementById("product-list");

 
  if (productList) {
    const searchInput = document.getElementById("search");
    const categorySelect = document.getElementById("category");
    const btnRender = document.getElementById("btnRender");

    renderCategories();
    renderProducts(data.produtos);

    searchInput.addEventListener("input", function() {
      renderProducts(filterProducts());
    });

    categorySelect.addEventListener("change", function() {
      renderProducts(filterProducts());
    });

    btnRender.addEventListener("click", function() {
      searchInput.value = "";
      categorySelect.value = "Todas";
      renderProducts(data.produtos);
    });
  }

  // Se for a página de detalhes
  if (document.getElementById("product-details")) {
    showProductDetails();
  }
}


document.addEventListener("DOMContentLoaded", iniciarPagina);