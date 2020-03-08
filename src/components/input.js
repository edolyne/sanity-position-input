import PropTypes from 'prop-types'
import React from 'react'
import FormField from 'part:@sanity/components/formfields/default'
import PatchEvent, {set, unset} from '@sanity/form-builder/PatchEvent'

import styled from 'styled-components'

import { LeftIcon } from '../icons/left'
import { RightIcon } from '../icons/right'
import { CenterIcon } from '../icons/center'
import { FullIcon } from '../icons/full'
import { DropLeftIcon } from '../icons/drop-left'
import { DropRightIcon } from '../icons/drop-right'

const AlignmentButton = styled.button`
  appearance: none;
  padding: 10px;
  display: inline-block;
  
  &.active {
    border-color: #156dff;
    background-color: #156dff; 
    
    svg {
      fill: #fff;
    }
  }
  
  svg {
    display: flex;
    width: 22px;
    height: 22px;
    fill: rgb(48, 48, 48);
  }
  
  &:hover {
    cursor: pointer;
    
    &:not(.active) {
      background-color: rgba(48, 48, 48, 0.05);
    }
  }
  
  &:not(:last-of-type) {
    margin-right: 2px;
  }
  
  &:first-of-type {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  
  &:last-of-type {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`

class PositionInput extends React.Component {

  constructor(props) {
    super(props)
  }

  handleChange(value) {
    const patch = value === '' ? unset() : set(value)
    this.props.onChange(PatchEvent.from(patch))
  }

  render() {
    const {type: {title, description, options}, value, level} = this.props
    const choices = options && options.choices ? options.choices : ['left', 'right', 'center']

    return (
      <div>
        <FormField label={title} level={level} description={description} />
        <div>
          {choices.includes('left') &&
            <AlignmentButton
                className={value === 'left' ? 'active' : ''}
                onClick={() => this.handleChange('left')}
            >
              <LeftIcon/>
            </AlignmentButton>
          }
          {choices.includes('center') &&
          <AlignmentButton
              className={value === 'center' ? 'active' : ''}
              onClick={() => this.handleChange('center')}
          >
            <CenterIcon/>
          </AlignmentButton>
          }
          {choices.includes('right') &&
          <AlignmentButton
              className={value === 'right' ? 'active' : ''}
              onClick={() => this.handleChange('right')}
          >
            <RightIcon/>
          </AlignmentButton>
          }
          {choices.includes('full') &&
            <AlignmentButton
                className={value === 'full' ? 'active' : ''}
                onClick={() => this.handleChange('full')}
            >
              <FullIcon/>
            </AlignmentButton>
          }
          {choices.includes('drop-left') &&
          <AlignmentButton
              className={value === 'drop-left' ? 'active' : ''}
              onClick={() => this.handleChange('drop-left')}
          >
            <DropLeftIcon />
          </AlignmentButton>
          }
          {choices.includes('drop-right') &&
          <AlignmentButton
              className={value === 'drop-right' ? 'active' : ''}
              onClick={() => this.handleChange('drop-right')}
          >
            <DropRightIcon />
          </AlignmentButton>
          }
        </div>
      </div>
    )
  }
}

PositionInput.propTypes = {
  value: PropTypes.string,
};

export default PositionInput;