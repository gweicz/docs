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
        'ethbohemia',
      ],
    },
    {
      type: 'category',
      label: 'Konference',
      collapsed: false,
      collapsible: false,
      items: [
        'web3privacy-summit',
        'l2loft',
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
      label: 'Online události (neaktivní)',
      collapsed: false,
      collapsible: false,
      items: [
        'palime-ether',
        'pitevna'
      ],
    },
    {
      type: 'category',
      label: 'Bývalé události',
      collapsed: false,
      collapsible: false,
      items: [
        'utxo',
      ],
    },

  ],
};

module.exports = sidebars