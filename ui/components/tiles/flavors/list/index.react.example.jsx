/*
Copyright (c) 2015, salesforce.com, inc. All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
Neither the name of salesforce.com, inc. nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

import React from 'react';
import SvgIcon from 'app_modules/ui/svg-icon';
import { TileMedia } from 'ui/components/tiles/flavors/base/index.react.example';

const icon = (
  <span className="slds-icon_container" title="description of icon when needed">
    <SvgIcon className="slds-icon" sprite="doctype" symbol="zip" />
  </span>
);

export default (
  <ul className="slds-has-dividers--bottom-space">
    <li className="slds-item">
      <TileMedia title="SLDS_038.zip" media={ icon }>
        <ul className="slds-list--horizontal slds-has-dividers--right">
          <li className="slds-item">May 9th, 2015</li>
          <li className="slds-item">3.6mb</li>
        </ul>
      </TileMedia>
    </li>
    <li className="slds-item">
    <TileMedia title="SLDS_038.zip" media={ icon }>
      <ul className="slds-list--horizontal slds-has-dividers--right">
        <li className="slds-item">May 9th, 2015</li>
        <li className="slds-item">3.6mb</li>
      </ul>
    </TileMedia>
    </li>
    <li className="slds-item">
    <TileMedia title="SLDS_038.zip" media={ icon }>
      <ul className="slds-list--horizontal slds-has-dividers--right">
        <li className="slds-item">May 9th, 2015</li>
        <li className="slds-item">3.6mb</li>
      </ul>
    </TileMedia>
    </li>
  </ul>
);
