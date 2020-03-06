import React from 'react';

import Name from './Name/Name';
import Race from './Race/Race';
import Class from './Class/Class';
import Abilities from './Abilities/Abilities';
import Description from './Description/Description';
import Equipment from './Equipment/Equipment';

export const mainComponent = link => {
  switch (link) {
    case 'name':
      return <Name />;
      break;
    case 'race':
      return <Race />;
      break;
    case 'class':
      return <Class />;
      break;
    case 'abilities':
      return <Abilities />;
      break;
    case 'description':
      return <Description />;
      break;
    case 'equipment':
      return <Equipment />;
      break;
    default:
      return <div>error</div>;
      break;
  }
};
