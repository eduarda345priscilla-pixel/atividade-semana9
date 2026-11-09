
const data = {
  produtos: [
    {
      id: 1,
      nome: "Nike Air Force 1 '07",
      preco: 799.90,
      categoria: "Casual",
      imagem: "img/images.jpg",
      descricao: "O brilho vive no Nike Air Force 1 '07, o ícone do basquete que dá um toque moderno.",
      emEstoque: true,
      destaque: true,
     fotos: [
  {
    titulo: "Vista lateral",
    imagem: "img/images.jpg"
  },
  {
    titulo: "Vista frontal",
    imagem: "img/air (2).jpg"
  },
  {
    titulo: "Detalhe do solado",
    imagem: "img/air (1).jpg"
  }
]
    },
    {
      id: 2,
      nome: "Adidas Ultraboost Light",
      preco: 1199.90,
      categoria: "Corrida",
      imagem: "img/adidas.jpg",
      descricao: "Experimente a energia épica com o novo Ultraboost Light, nosso Ultraboost mais leve de todos.",
      emEstoque: true,
      destaque: false,
      fotos: [
  {
    titulo: "Vista lateral",
    imagem: "img/adidas.jpg"
  },
  {
    titulo: "Vista frontal",
    imagem: "img/adidas (2).jpg"
  },
  {
    titulo: "Detalhe do solado",
    imagem: "img/adidas (1).jpg"
  }
]
    },
    {
      id: 3,
      nome: "Jordan Air 1 Retro High",
      preco: 1499.90,
      categoria: "Basquete",
      imagem: "img/jordan.jpg",
      descricao: "Estilo lendário inspirado na herança das quadras de basquete dos anos 80.",
      emEstoque: false,
      destaque: true,
      fotos: [
  {
    titulo: "Vista lateral",
    imagem: "img/jordan.jpg"
  },
  {
    titulo: "Vista frontal",
    imagem: "img/jordan (1).jpg"
  },
  {
    titulo: "Detalhe do solado",
    imagem: "img/jordan (2).jpg"
  }
]
    },
    {
      id: 4,
      nome: "Puma RS-X Efekt",
      preco: 699.90,
      categoria: "Casual",
      imagem: "img/pulma.jpg",
      descricao: "Design futurista-retro com silhueta arrojada e camadas de materiais premium.",
      emEstoque: true,
      destaque: false,
      fotos: [
  {
    titulo: "Vista lateral",
    imagem: "img/pulma.jpg"
  },
  {
    titulo: "Vista frontal",
    imagem: "img/didas (1).jpg"
  },
  {
    titulo: "Detalhe do solado",
    imagem: "img/didas (2).jpg"
  }
]
    },
    {
      id: 5,
      nome: "Mizuno Wave Prophecy 12",
      preco: 1799.90,
      categoria: "Corrida",
      imagem: "img/mizuno.jpg",
      descricao: "Máximo amortecimento com a tecnologia Wave para corridas de alta performance.",
      emEstoque: true,
      destaque: false,
     fotos: [
  {
    titulo: "Vista lateral",
    imagem: "img/mizuno.jpg"
  },
  {
    titulo: "Vista frontal",
    imagem: "img/mizuno (1).jpg"
  },
  {
    titulo: "Detalhe do solado",
    imagem: "img/mizuno (2).jpg"
  }
]
    },
    {
      id: 6,
      nome: "Nike Lebron XXI",
      preco: 1399.90,
      categoria: "Basquete",
      imagem: "img/nikee.jpg",
      descricao: "Desenvolvido para agilidade, contenção e baixo perfil nas quadras de basquete.",
      emEstoque: false,
      destaque: false,
     fotos: [
  {
    titulo: "Vista lateral",
    imagem: "img/nikee.jpg"
  },
  {
    titulo: "Vista frontal",
    imagem: "img/nike (1).jpg"
  },
  {
    titulo: "Detalhe do solado",
    imagem: "img/nike (2).jpg"
  }
]
    },
    {
      id: 7,
      nome: "Vans Old Skool Classic",
      preco: 399.90,
      categoria: "Skate",
      imagem: "img/vans.jpg",
      descricao: "O clássico tênis de skate da Vans com a icônica listra lateral em couro.",
      emEstoque: true,
      destaque: true,
     fotos: [
  {
    titulo: "Vista lateral",
    imagem: "img/vans.jpg"
  },
  {
    titulo: "Vista frontal",
    imagem: "img/vans (2).jpg"
  },
  {
    titulo: "Detalhe do solado",
    imagem: "img/vans (1).jpg"
  }
]
    },
    {
      id: 8,
      nome: "Nike SB Dunk Low",
      preco: 899.90,
      categoria: "Skate",
      imagem: "img/nike low.jpg",
      descricao: "Amortecimento e tração otimizados para a prática do skate e uso diário.",
      emEstoque: true,
      destaque: false,
     fotos: [
  {
    titulo: "Vista lateral",
    imagem: "img/nike low.jpg"
  },
  {
    titulo: "Vista frontal",
    imagem: "img/force (2).jpg"
  },
  {
    titulo: "Detalhe do solado",
    imagem: "img/force (1).jpg"
  }
]
    }
  ]
};




function formatPrice(preco) {
  return preco.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}



function renderFeatured() {
  const lista = document.getElementById("listaDestaques");
  const indicadores = document.getElementById(
    "indicadoresDestaques"
  );

  if (!lista || !indicadores) return;

  const destaques = data.produtos.filter(function(produto) {
    return produto.destaque === true;
  });

  lista.innerHTML = "";
  indicadores.innerHTML = "";

  if (destaques.length === 0) {
    lista.innerHTML = `
      <p class="p-4 text-center">
        Nenhum tênis em destaque.
      </p>
    `;
    return;
  }

  destaques.forEach(function(produto, index) {
    const slide = document.createElement("div");

    slide.className = "carousel-item";

    if (index === 0) {
      slide.classList.add("active");
    }

    slide.innerHTML = `
      <div class="featured-layout">

        <div class="featured-media">
          <a href="detalhes.html?id=${produto.id}">
            <img
              src="${produto.imagem}"
              alt="${produto.nome}"
              class="featured-image">
          </a>
        </div>

        <div class="featured-info">
          <h3>${produto.nome}</h3>

          <p>${produto.descricao}</p>

          <div class="featured-price">
            ${formatPrice(produto.preco)}
          </div>

          <a href="detalhes.html?id=${produto.id}"
             class="btn btn-dark">
            Ver detalhes
          </a>
        </div>

      </div>
    `;

    lista.appendChild(slide);

    const indicador = document.createElement("button");

    indicador.type = "button";

    indicador.setAttribute(
      "data-bs-target",
      "#destaquesCarousel"
    );

    indicador.setAttribute(
      "data-bs-slide-to",
      index
    );

    indicador.setAttribute(
      "aria-label",
      "Slide " + (index + 1)
    );

    if (index === 0) {
      indicador.classList.add("active");
      indicador.setAttribute("aria-current", "true");
    }

    indicadores.appendChild(indicador);
  });
}




function createProductCard(produto) {
  const coluna = document.createElement("div");

  coluna.className = "col-12 col-sm-6 col-lg-3";

  const status = produto.emEstoque
    ? "Disponível"
    : "Esgotado";

  const classeStatus = produto.emEstoque
    ? "stock-available"
    : "stock-unavailable";

  coluna.innerHTML = `
    <div class="card sneaker-card h-100">

      <a href="detalhes.html?id=${produto.id}">
        <img
          src="${produto.imagem}"
          alt="${produto.nome}"
          class="card-img-top product-image">
      </a>

      <div class="card-body d-flex flex-column">

        <p class="product-category">
          ${produto.categoria}
        </p>

        <h3 class="card-title">
          ${produto.nome}
        </h3>

        <p class="card-price">
          ${formatPrice(produto.preco)}
        </p>

        <p class="${classeStatus}">
          ${status}
        </p>

        <a href="detalhes.html?id=${produto.id}"
           class="btn btn-dark mt-auto">
          Ver detalhes
        </a>

      </div>

    </div>
  `;

  return coluna;
}


function renderProducts(produtos) {
  const lista = document.getElementById("product-list");

  if (!lista) return;

  lista.innerHTML = "";

  if (produtos.length === 0) {
    lista.innerHTML = `
      <p>Nenhum tênis encontrado.</p>
    `;
    return;
  }

  produtos.forEach(function(produto) {
    const card = createProductCard(produto);
    lista.appendChild(card);
  });
}



function renderCategories() {
  const select = document.getElementById("category");

  if (!select) return;

  const categorias = [
    "Todas",
    ...new Set(data.produtos.map(function(produto) {
      return produto.categoria;
    }))
  ];

  select.innerHTML = "";

  categorias.forEach(function(categoria) {
    const option = document.createElement("option");

    option.value = categoria;
    option.textContent = categoria;

    select.appendChild(option);
  });
}


function filterProducts() {
  const pesquisa = document.getElementById("search")
    .value.toLowerCase();

  const categoria = document.getElementById("category")
    .value;

  return data.produtos.filter(function(produto) {
    const nomeCorreto = produto.nome
      .toLowerCase()
      .includes(pesquisa);

    const categoriaCorreta =
      categoria === "Todas" ||
      produto.categoria === categoria;

    return nomeCorreto && categoriaCorreta;
  });
}



function showProductDetails() {
  const detalhes = document.getElementById(
    "product-details"
  );

  const galeria = document.getElementById(
    "gallery-track"
  );

  if (!detalhes || !galeria) return;

  // Pegar ID da URL
  const parametros = new URLSearchParams(
    window.location.search
  );

  const id = Number(parametros.get("id"));

  
  const produto = data.produtos.find(function(item) {
    return item.id === id;
  });

  if (!produto) {
    detalhes.innerHTML = `
      <h2>Produto não encontrado!</h2>
      <p>Volte para a loja e escolha outro tênis.</p>
    `;

    document.getElementById(
      "product-photos"
    ).style.display = "none";

    return;
  }

  const status = produto.emEstoque
    ? "Disponível no estoque"
    : "Produto esgotado";

  const classeStatus = produto.emEstoque
    ? "stock-available"
    : "stock-unavailable";

  detalhes.innerHTML = `
    <div class="details-layout">

      <div class="details-image-box">
        <img
          src="${produto.imagem}"
          alt="${produto.nome}"
          class="details-image">
      </div>

      <div class="details-info">

        <h2>${produto.nome}</h2>

        <p class="card-price">
          ${formatPrice(produto.preco)}
        </p>

        <p>
          <strong>Código:</strong>
          ${produto.id}
        </p>

        <p>
          <strong>Categoria:</strong>
          ${produto.categoria}
        </p>

        <p>
          <strong>Disponibilidade:</strong>
          <span class="${classeStatus}">
            ${status}
          </span>
        </p>

        <p class="details-description">
          <strong>Descrição:</strong>
          ${produto.descricao}
        </p>

      </div>

    </div>
  `;

  const fotos = produto.fotos || [];

  galeria.innerHTML = "";

  fotos.forEach(function(foto) {
    const card = document.createElement("div");

    card.className = "gallery-card";

    card.innerHTML = `
      <img
        src="${foto.imagem}"
        alt="${foto.titulo}"
        class="gallery-image">

      <div class="gallery-title">
        ${foto.titulo}
      </div>
    `;

    galeria.appendChild(card);
  });

  const anterior = document.getElementById("galleryPrev");
  const proximo = document.getElementById("galleryNext");

  if (anterior && proximo) {
    anterior.disabled = fotos.length <= 1;
    proximo.disabled = fotos.length <= 1;

    anterior.addEventListener("click", function() {
      galeria.scrollBy({
        left: -300,
        behavior: "smooth"
      });
    });

    proximo.addEventListener("click", function() {
      galeria.scrollBy({
        left: 300,
        behavior: "smooth"
      });
    });
  }
}



function iniciarPagina() {

  if (document.getElementById("product-list")) {

    renderFeatured();

    renderCategories();

    
    renderProducts(data.produtos);

    const search = document.getElementById("search");
    const category = document.getElementById("category");
    const btnRender = document.getElementById("btnRender");

    
    search.addEventListener("input", function() {
      renderProducts(filterProducts());
    });

    
    category.addEventListener("change", function() {
      renderProducts(filterProducts());
    });

   
    btnRender.addEventListener("click", function() {
      search.value = "";
      category.value = "Todas";
      renderProducts(data.produtos);
    });
  }

  if (document.getElementById("product-details")) {
    showProductDetails();
  }
}

document.addEventListener(
  "DOMContentLoaded",
  iniciarPagina
);
