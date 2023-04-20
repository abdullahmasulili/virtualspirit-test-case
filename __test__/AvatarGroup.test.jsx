import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'
import { it, expect, describe, test } from 'vitest'
import avatars from '../src/dummy/avatars'
import AvatarGroup from '../src/components/avatar/AvatarGroup';

describe('Avatar Group test', () => {
    test('should render properly', () => {
        render(<AvatarGroup />)

        expect(screen.getByText(/TB/i))
    })

    it('rendered with expected props', () => {
        const maxLength = 3
        const size = 'md'
        const container = render(
            <AvatarGroup avatars={avatars} maxLength={maxLength} size={size} />
        )
        const avatar = container.getAllByTestId('avatar')
        
        avatar.forEach(item => {
            expect(item.className.includes(`avatar--${size}`)).toBe(true)
        })
        expect(avatar.length).toBe(maxLength + 1)
        
    })

    it('should match the snapshot', () => {
        const tree = renderer.create(<AvatarGroup />)

        expect(tree).toMatchSnapshot()
    })
})