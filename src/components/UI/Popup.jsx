export default function Popup(props){
	const {popupState, setPopupState} = props

	return (
		<div className={`popup ${popupState ? 'open' : ''}`} onClick={() => setPopupState(false)}>
			<div className="popup__body">
				<div className="popup__content" onClick={(e) => e.stopPropagation()}>
					<button
						type="button"
						className="popup__close close-popup"
						onClick={() => setPopupState(false)}
					>X
					</button>
					{props.children}
				</div>
			</div>
		</div>
	)
}
