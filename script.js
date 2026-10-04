// B.1. Base de dados (JSON) - Tênis (Mínimo 8 produtos)
const data = {
  produtos: [
    { id: 1, nome: "Nike Air Force 1 '07", preco: 799.90, categoria: "Casual", imagem: "https://via.placeholder.com/150", descricao: "O brilho vive no Nike Air Force 1 '07, o ícone do basquete que dá um toque moderno.", emEstoque: true },
    { id: 2, nome: "Adidas Ultraboost Light", preco: 1199.90, categoria: "Corrida", imagem: "https://via.placeholder.com/150", descricao: "Experimente a energia épica com o novo Ultraboost Light, nosso Ultraboost mais leve de todos.", emEstoque: true },
    { id: 3, nome: "Jordan Air 1 Retro High", preco: 1499.90, categoria: "Basquete", imagem: "https://via.placeholder.com/150", descricao: "Estilo lendário inspirado na herança das quadras de basquete dos anos 80.", emEstoque: false },
    { id: 4, nome: "Puma RS-X Efekt", preco: 699.90, categoria: "Casual", imagem: "https://via.placeholder.com/150", descricao: "Design futurista-retro com silhueta arrojada e camadas de materiais premium.", emEstoque: true },
    { id: 5, nome: "Mizuno Wave Prophecy 12", preco: 1799.90, categoria: "Corrida", imagem: "https://via.placeholder.com/150", descricao: "Máximo amortecimento com a tecnologia Wave para corridas de alta performance.", emEstoque: true },
    { id: 6, nome: "Nike Lebron XXI", preco: 1399.90, categoria: "Basquete", imagem: "https://via.placeholder.com/150", descricao: "Desenvolvido para agilidade, contenção e baixo perfil nas quadras de basquete.", emEstoque: false },
    { id: 7, nome: "Vans Old Skool Classic", preco: 399.90, categoria: "Skate", imagem: "https://via.placeholder.com/150", descricao: "O clássico tênis de skate da Vans com a icônica listra lateral em couro.", emEstoque: true },
    { id: 8, nome: "Nike SB Dunk Low", preco: 899.90, categoria: "Skate", imagem: "https://via.placeholder.com/150", descricao: "Amortecimento e tração otimizados para a prática do skate e uso diário.", emEstoque: true }
  ]
};

// B.2. Seleção de elementos (DOM)
const productList = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");
const searchInput = document.querySelector("#search");
const categorySelect = document.querySelector("#category");
const btnRender = document.querySelector("#btnRender");

// B.3. Funções obrigatórias

// Formata preço para o padrão BRL
function formatPrice(preco) {
  return `R$ ${preco.toFixed(2)}`;
}

// Cria card de um tênis individual
function createProductCard(produto) {
  const card = document.createElement("div");
  
  // setAttribute e classList.add
  card.setAttribute("data-id", produto.id);
  card.classList.add("card");

  // Pelo menos 1 ajuste via style (Requisito B.3)
  card.style.padding = "15px";

  // Conteúdo interno do card
  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h3 class="card-title">${produto.nome}</h3>
    <p class="card-price">${formatPrice(produto.preco)}</p>
    <p><small>Categoria: ${produto.categoria}</small></p>
    <div class="card-buttons">
      <button class="btn-details">Ver detalhes</button>
      <button class="btn-highlight">Destacar</button>
    </div>
  `;

  // B.4. Eventos nos botões do card
  const btnDetails = card.querySelector(".btn-details");
  const btnHighlight = card.querySelector(".btn-highlight");

  btnDetails.addEventListener("click", () => {
    showProductDetails(produto);
  });

  btnHighlight.addEventListener("click", () => {
    // Alterna a classe highlight (classList.add / classList.toggle)
    card.classList.toggle("highlight");
  });

  return card;
}

// Limpa a lista e renderiza os cards recebidos
function renderProducts(produtos) {
  productList.innerHTML = "";

  produtos.forEach(produto => {
    const card = createProductCard(produto);
    productList.appendChild(card);
  });

  // B.5. Uso de querySelectorAll obrigatório após renderizar
  logAllCardsData();
}

// Preenche o <select> com categorias únicas de tênis (Casual, Corrida, Basquete, Skate)
function renderCategories() {
  const categorias = ["Todas", ...new Set(data.produtos.map(p => p.categoria))];
  
  categorySelect.innerHTML = "";
  categorias.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });
}

// Exibe detalhes do tênis no container #product-details
function showProductDetails(produto) {
  const estoqueStatus = produto.emEstoque ? "Disponível no estoque" : "Produto esgotado";
  const estoqueClasse = produto.emEstoque ? "text-success" : "text-danger";

  productDetails.innerHTML = `
    <h2>${produto.nome}</h2>
    <p><strong>Preço:</strong> ${formatPrice(produto.preco)}</p>
    <p><strong>Estilo / Categoria:</strong> ${produto.categoria}</p>
    <p><strong>Disponibilidade:</strong> <span class="${estoqueClasse}">${estoqueStatus}</span></p>
    <p><strong>Descrição:</strong> ${produto.descricao}</p>
  `;
}

// Filtra tênis por busca de texto e categoria selecionada
function filterProducts() {
  const searchText = searchInput.value.toLowerCase();
  const selectedCategory = categorySelect.value;

  return data.produtos.filter(produto => {
    const matchesSearch = produto.nome.toLowerCase().includes(searchText);
    const matchesCategory = selectedCategory === "Todas" || produto.categoria === selectedCategory;
    return matchesSearch && matchesCategory;
  });
}

// B.5. Função para atender o requisito do querySelectorAll
function logAllCardsData() {
  const cards = document.querySelectorAll(".card");
  console.log(`--- Tênis exibidos na vitrine: ${cards.length} ---`);
  cards.forEach(card => {
    const dataId = card.getAttribute("data-id");
    console.log(`Tênis carregado no DOM - data-id: ${dataId}`);
  });
}

// B.4. EventListeners nos controles da tela
searchInput.addEventListener("input", () => {
  const filtrados = filterProducts();
  renderProducts(filtrados);
});

categorySelect.addEventListener("change", () => {
  const filtrados = filterProducts();
  renderProducts(filtrados);
});

btnRender.addEventListener("click", () => {
  searchInput.value = "";
  categorySelect.value = "Todas";
  renderProducts(data.produtos);
});

// Inicialização da aplicação
renderCategories();
renderProducts(data.produtos);