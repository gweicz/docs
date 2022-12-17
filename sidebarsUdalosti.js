const sidebars = {
  doc: [
    'index',
    //'kalendar-akci',
    {
      type: 'category',
      label: 'Hackathony',
      collapsed: false,
      collapsible: false,
      items: [
        'ethbrno',
      ],
    },
    {
      type: 'category',
      label: 'Konference',
      collapsed: false,
      collapsible: false,
      items: [
        'utxo',
        'ethbrno-prague',
        'ethbrno-proxy',
      ],
    },
    {
      type: 'category',
      label: 'Meetupy',
      collapsed: false,
      collapsible: false,
      items: [
        'gweicz-meetup',
        'beerfi'
      ],
    },
    {
      type: 'category',
      label: 'Online události',
      collapsed: false,
      collapsible: false,
      items: [
        'palime-ether',
        'pitevna'
      ],
    },

  ],
};

module.exports = sidebars