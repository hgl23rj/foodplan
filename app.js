const foods = [
  { code: 'BRC0001C', name: 'Abacate, polpa, in natura, Brasil', group: 'Frutas e derivados', type: 'Alimento in natura', scientific: 'Persea americana Mill', emoji: '🥑', tone: 'fruit', energy: 96, nutrients: { 'Energia': ['96', 'kcal'], 'Proteínas': ['1,2', 'g'], 'Carboidratos': ['6,0', 'g'], 'Lipídios': ['8,4', 'g'], 'Fibra alimentar': ['6,3', 'g'], 'Cálcio': ['8', 'mg'], 'Ferro': ['0,2', 'mg'], 'Sódio': ['1', 'mg'], 'Potássio': ['206', 'mg'], 'Vitamina C': ['8,7', 'mg'], 'Vitamina A': ['5', 'µg'], 'Vitamina E': ['2,1', 'mg'] } },
  { code: 'BRC0002C', name: 'Abacaxi, polpa, in natura, Brasil', group: 'Frutas e derivados', type: 'Alimento in natura', scientific: 'Ananas comosus L.', emoji: '🍍', tone: 'fruit', energy: 48, nutrients: { 'Energia': ['48', 'kcal'], 'Proteínas': ['0,9', 'g'], 'Carboidratos': ['12,3', 'g'], 'Lipídios': ['0,1', 'g'], 'Fibra alimentar': ['1,0', 'g'], 'Cálcio': ['22', 'mg'], 'Ferro': ['0,3', 'mg'], 'Sódio': ['1', 'mg'], 'Potássio': ['131', 'mg'], 'Vitamina C': ['34,6', 'mg'], 'Vitamina A': ['3', 'µg'], 'Vitamina E': ['0,0', 'mg'] } },
  { code: 'BRC0006B', name: 'Abobrinha, italiana, com casca, crua', group: 'Vegetais e derivados', type: 'Alimento in natura', scientific: 'Cucurbita pepo L.', emoji: '🥒', tone: 'veg', energy: 19, nutrients: { 'Energia': ['19', 'kcal'], 'Proteínas': ['1,1', 'g'], 'Carboidratos': ['3,0', 'g'], 'Lipídios': ['0,4', 'g'], 'Fibra alimentar': ['1,6', 'g'], 'Cálcio': ['15', 'mg'], 'Ferro': ['0,4', 'mg'], 'Sódio': ['0', 'mg'], 'Potássio': ['253', 'mg'], 'Vitamina C': ['21,1', 'mg'], 'Vitamina A': ['10', 'µg'], 'Vitamina E': ['0,1', 'mg'] } },
  { code: 'BRC0004B', name: 'Abóbora moranga, sem casca, crua', group: 'Vegetais e derivados', type: 'Alimento in natura', scientific: 'Cucurbita spp.', emoji: '🎃', tone: 'veg', energy: 26, nutrients: { 'Energia': ['26', 'kcal'], 'Proteínas': ['1,0', 'g'], 'Carboidratos': ['6,1', 'g'], 'Lipídios': ['0,1', 'g'], 'Fibra alimentar': ['2,3', 'g'], 'Cálcio': ['18', 'mg'], 'Ferro': ['0,4', 'mg'], 'Sódio': ['1', 'mg'], 'Potássio': ['340', 'mg'], 'Vitamina C': ['9,6', 'mg'], 'Vitamina A': ['280', 'µg'], 'Vitamina E': ['1,1', 'mg'] } },
  { code: 'BRC0010B', name: 'Alho, cru, Brasil', group: 'Vegetais e derivados', type: 'Alimento in natura', scientific: 'Allium sativum L.', emoji: '🧄', tone: 'veg', energy: 113, nutrients: { 'Energia': ['113', 'kcal'], 'Proteínas': ['7,0', 'g'], 'Carboidratos': ['23,9', 'g'], 'Lipídios': ['0,2', 'g'], 'Fibra alimentar': ['4,3', 'g'], 'Cálcio': ['14', 'mg'], 'Ferro': ['0,8', 'mg'], 'Sódio': ['5', 'mg'], 'Potássio': ['535', 'mg'], 'Vitamina C': ['17,0', 'mg'], 'Vitamina A': ['0', 'µg'], 'Vitamina E': ['0,1', 'mg'] } },
  { code: 'BRC0007B', name: 'Alface, crespa, crua, Brasil', group: 'Vegetais e derivados', type: 'Alimento in natura', scientific: 'Lactuca sativa L.', emoji: '🥬', tone: 'veg', energy: 11, nutrients: { 'Energia': ['11', 'kcal'], 'Proteínas': ['1,4', 'g'], 'Carboidratos': ['1,7', 'g'], 'Lipídios': ['0,2', 'g'], 'Fibra alimentar': ['1,8', 'g'], 'Cálcio': ['38', 'mg'], 'Ferro': ['0,4', 'mg'], 'Sódio': ['3', 'mg'], 'Potássio': ['267', 'mg'], 'Vitamina C': ['15,6', 'mg'], 'Vitamina A': ['261', 'µg'], 'Vitamina E': ['0,2', 'mg'] } },
  { code: 'BRC0001A', name: 'Arroz, tipo 1, cozido, sem óleo e sem sal', group: 'Cereais e derivados', type: 'Preparação', scientific: 'Oryza sativa L.', emoji: '🍚', tone: 'grain', energy: 128, nutrients: { 'Energia': ['128', 'kcal'], 'Proteínas': ['2,5', 'g'], 'Carboidratos': ['28,1', 'g'], 'Lipídios': ['0,2', 'g'], 'Fibra alimentar': ['1,6', 'g'], 'Cálcio': ['4', 'mg'], 'Ferro': ['0,1', 'mg'], 'Sódio': ['1', 'mg'], 'Potássio': ['20', 'mg'], 'Vitamina C': ['0,0', 'mg'], 'Vitamina A': ['0', 'µg'], 'Vitamina E': ['0,1', 'mg'] } },
  { code: 'BRC0001T', name: 'Feijão carioca, cozido, sem óleo e sem sal', group: 'Leguminosas e derivados', type: 'Preparação', scientific: 'Phaseolus vulgaris L.', emoji: '🫘', tone: 'grain', energy: 76, nutrients: { 'Energia': ['76', 'kcal'], 'Proteínas': ['4,8', 'g'], 'Carboidratos': ['13,6', 'g'], 'Lipídios': ['0,5', 'g'], 'Fibra alimentar': ['8,5', 'g'], 'Cálcio': ['27', 'mg'], 'Ferro': ['1,3', 'mg'], 'Sódio': ['2', 'mg'], 'Potássio': ['255', 'mg'], 'Vitamina C': ['0,0', 'mg'], 'Vitamina A': ['0', 'µg'], 'Vitamina E': ['0,1', 'mg'] } },
  { code: 'BRC0001D', name: 'Frango, peito, sem pele, grelhado', group: 'Carnes e derivados', type: 'Alimento processado', scientific: 'Gallus gallus domesticus', emoji: '🍗', tone: 'meat', energy: 159, nutrients: { 'Energia': ['159', 'kcal'], 'Proteínas': ['32,0', 'g'], 'Carboidratos': ['0,0', 'g'], 'Lipídios': ['2,5', 'g'], 'Fibra alimentar': ['0,0', 'g'], 'Cálcio': ['5', 'mg'], 'Ferro': ['0,3', 'mg'], 'Sódio': ['72', 'mg'], 'Potássio': ['256', 'mg'], 'Vitamina C': ['0,0', 'mg'], 'Vitamina A': ['4', 'µg'], 'Vitamina E': ['0,3', 'mg'] } },
  { code: 'BRC0001E', name: 'Leite de vaca, integral, fluido', group: 'Leite e derivados', type: 'Alimento processado', scientific: 'Bos taurus', emoji: '🥛', tone: 'dairy', energy: 61, nutrients: { 'Energia': ['61', 'kcal'], 'Proteínas': ['3,2', 'g'], 'Carboidratos': ['4,8', 'g'], 'Lipídios': ['3,3', 'g'], 'Fibra alimentar': ['0,0', 'g'], 'Cálcio': ['123', 'mg'], 'Ferro': ['0,0', 'mg'], 'Sódio': ['43', 'mg'], 'Potássio': ['152', 'mg'], 'Vitamina C': ['0,9', 'mg'], 'Vitamina A': ['33', 'µg'], 'Vitamina E': ['0,1', 'mg'] } },
  { code: 'BRC0001F', name: 'Banana, prata, crua, Brasil', group: 'Frutas e derivados', type: 'Alimento in natura', scientific: 'Musa spp.', emoji: '🍌', tone: 'fruit', energy: 98, nutrients: { 'Energia': ['98', 'kcal'], 'Proteínas': ['1,3', 'g'], 'Carboidratos': ['26,0', 'g'], 'Lipídios': ['0,1', 'g'], 'Fibra alimentar': ['2,0', 'g'], 'Cálcio': ['8', 'mg'], 'Ferro': ['0,4', 'mg'], 'Sódio': ['0', 'mg'], 'Potássio': ['358', 'mg'], 'Vitamina C': ['21,6', 'mg'], 'Vitamina A': ['7', 'µg'], 'Vitamina E': ['0,1', 'mg'] } },
  { code: 'BRC0001G', name: 'Aveia, flocos, crua', group: 'Cereais e derivados', type: 'Alimento processado', scientific: 'Avena sativa L.', emoji: '🌾', tone: 'grain', energy: 394, nutrients: { 'Energia': ['394', 'kcal'], 'Proteínas': ['13,9', 'g'], 'Carboidratos': ['66,6', 'g'], 'Lipídios': ['8,5', 'g'], 'Fibra alimentar': ['9,1', 'g'], 'Cálcio': ['48', 'mg'], 'Ferro': ['4,4', 'mg'], 'Sódio': ['5', 'mg'], 'Potássio': ['336', 'mg'], 'Vitamina C': ['0,0', 'mg'], 'Vitamina A': ['0', 'µg'], 'Vitamina E': ['0,7', 'mg'] } },
  {
    code: 'BRC0002T',
    name: 'Feijão preto, cozido, sem óleo e sem sal',
    group: 'Leguminosas e derivados',
    type: 'Preparação',
    scientific: 'Phaseolus vulgaris L.',
    emoji: '🫘',
    tone: 'grain',
    energy: 77,
    nutrients: {
      'Energia': ['77', 'kcal'],
      'Proteínas': ['4,5', 'g'],
      'Carboidratos': ['14,0', 'g'],
      'Lipídios': ['0,5', 'g'],
      'Fibra alimentar': ['8,4', 'g'],
      'Cálcio': ['20', 'mg'],
      'Ferro': ['1,5', 'mg'],
      'Sódio': ['2', 'mg'],
      'Potássio': ['255', 'mg'],
      'Vitamina C': ['0,0', 'mg'],
      'Vitamina A': ['0', 'µg'],
      'Vitamina E': ['0,1', 'mg']
    }
  },
  {
    code: 'BRC0003B',
    name: 'Batata-doce, cozida',
    group: 'Vegetais e derivados',
    type: 'Alimento in natura',
    scientific: 'Ipomoea batatas (L.) Lam.',
    emoji: '🍠',
    tone: 'veg',
    energy: 77,
    nutrients: {
      'Energia': ['77', 'kcal'],
      'Proteínas': ['0,6', 'g'],
      'Carboidratos': ['18,4', 'g'],
      'Lipídios': ['0,1', 'g'],
      'Fibra alimentar': ['2,2', 'g'],
      'Cálcio': ['19', 'mg'],
      'Ferro': ['0,2', 'mg'],
      'Sódio': ['3', 'mg'],
      'Potássio': ['193', 'mg'],
      'Vitamina C': ['2,4', 'mg'],
      'Vitamina A': ['350', 'µg'],
      'Vitamina E': ['0,3', 'mg']
    }
  },
  {
    code: 'BRC0002A',
    name: 'Ovo de galyna, inteiro, cozido',
    group: 'Carnes e derivados',
    type: 'Alimento in natura',
    scientific: 'Gallus gallus domesticus',
    emoji: '🥚',
    tone: 'meat',
    energy: 146,
    nutrients: {
      'Energia': ['146', 'kcal'],
      'Proteínas': ['13,3', 'g'],
      'Carboidratos': ['0,6', 'g'],
      'Lipídios': ['9,5', 'g'],
      'Fibra alimentar': ['0,0', 'g'],
      'Cálcio': ['50', 'mg'],
      'Ferro': ['1,8', 'mg'],
      'Sódio': ['124', 'mg'],
      'Potássio': ['135', 'mg'],
      'Vitamina C': ['0,0', 'mg'],
      'Vitamina A': ['160', 'µg'],
      'Vitamina E': ['1,0', 'mg']
    }
  },
  {
    code: 'BRC0003F',
    name: 'Maçã, fuji, com casca, crua',
    group: 'Frutas e derivados',
    type: 'Alimento in natura',
    scientific: 'Malus domestica Borkh.',
    emoji: '🍎',
    tone: 'fruit',
    energy: 56,
    nutrients: {
      'Energia': ['56', 'kcal'],
      'Proteínas': ['0,3', 'g'],
      'Carboidratos': ['15,2', 'g'],
      'Lipídios': ['0,2', 'g'],
      'Fibra alimentar': ['2,0', 'g'],
      'Cálcio': ['5', 'mg'],
      'Ferro': ['0,1', 'mg'],
      'Sódio': ['1', 'mg'],
      'Potássio': ['115', 'mg'],
      'Vitamina C': ['3,5', 'mg'],
      'Vitamina A': ['3', 'µg'],
      'Vitamina E': ['0,2', 'mg']
    }
  }
];

const state = { query: '', group: 'all', type: 'all', selected: foods[0] };
const $ = (selector) => document.querySelector(selector);

function filteredFoods() {
  const normalized = state.query.trim().toLocaleLowerCase('pt-BR');
  return foods.filter((food) => {
    const matchesQuery = !normalized || `${food.name} ${food.code} ${food.scientific}`.toLocaleLowerCase('pt-BR').includes(normalized);
    const matchesGroup = state.group === 'all' || food.group === state.group;
    const matchesType = state.type === 'all' || food.type === state.type;
    return matchesQuery && matchesGroup && matchesType;
  });
}

function renderResults() {
  const results = filteredFoods();
  $('#result-count').textContent = String(results.length).padStart(2, '0');
  $('#empty-state').hidden = results.length !== 0;
  $('#results-list').innerHTML = results.map((food) => `
    <button class="result-item ${food.code === state.selected?.code ? 'active' : ''}" data-code="${food.code}" type="button">
      <span class="food-avatar ${food.tone}" aria-hidden="true">${food.emoji}</span>
      <span><strong class="result-name">${food.name}</strong><small class="result-meta">${food.code} · ${food.group}</small></span>
      <span class="result-energy"><strong>${food.energy}</strong><small>kcal / 100 g</small></span>
    </button>
  `).join('');
  document.querySelectorAll('.result-item').forEach((button) => {
    button.addEventListener('click', () => {
      state.selected = foods.find((food) => food.code === button.dataset.code);
      renderResults();
      renderDetail();
    });
  });
}

function renderRows(food, keys) {
  return keys.map((key) => {
    const value = food.nutrients[key];
    return `<div class="nutrient-row"><span class="nutrient-name">${key}</span><span class="nutrient-value">${value[0]}<em>${value[1]}</em></span></div>`;
  }).join('');
}

function renderDetail() {
  const food = state.selected;
  if (!food) {
    $('#detail-panel').innerHTML = '<div class="empty-state"><h3>Selecione um alimento</h3><p>Os nutrientes aparecerão aqui.</p></div>';
    return;
  }
  $('#detail-panel').innerHTML = `
    <div class="detail-header">
      <span class="detail-kicker">Composição nutricional</span>
      <span class="detail-code">${food.code}</span>
      <h2>${food.name}</h2>
      <p>${food.scientific} · ${food.group}</p>
      <div class="detail-serving"><span>Base de cálculo</span><strong>100 g do alimento</strong></div>
    </div>
    <div class="nutrients">
      <div class="nutrients-heading"><h3>Informação nutricional</h3><span>valor por 100 g</span></div>
      <div class="nutrient-section"><h4 class="nutrient-section-title">Energia e macronutrientes</h4>${renderRows(food, ['Energia', 'Proteínas', 'Carboidratos', 'Lipídios'])}</div>
      <div class="nutrient-section"><h4 class="nutrient-section-title">Fibras e minerais</h4>${renderRows(food, ['Fibra alimentar', 'Cálcio', 'Ferro', 'Sódio', 'Potássio'])}</div>
      <div class="nutrient-section"><h4 class="nutrient-section-title">Vitaminas</h4>${renderRows(food, ['Vitamina C', 'Vitamina A', 'Vitamina E'])}</div>
    </div>
    <div class="detail-footnote"><strong>Nota:</strong> dados locais demonstrativos para visualização da interface. Consulte a TBCA oficial para valores, metodologia e atualizações.</div>
  `;
}

function syncState() {
  state.query = $('#search-input').value;
  state.group = $('#group-filter').value;
  state.type = $('#type-filter').value;
  const available = filteredFoods();
  if (available.length && !available.some((food) => food.code === state.selected?.code)) state.selected = available[0];
  if (!available.length) state.selected = null;
  renderResults();
  renderDetail();
}

$('#search-input').addEventListener('input', syncState);
$('#search-button').addEventListener('click', syncState);
$('#group-filter').addEventListener('change', syncState);
$('#type-filter').addEventListener('change', syncState);
$('#clear-button').addEventListener('click', () => {
  $('#search-input').value = '';
  $('#group-filter').value = 'all';
  $('#type-filter').value = 'all';
  state.query = '';
  state.group = 'all';
  state.type = 'all';
  state.selected = foods[0];
  renderResults();
  renderDetail();
});
document.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    $('#search-input').focus();
  }
});

renderResults();
renderDetail();
